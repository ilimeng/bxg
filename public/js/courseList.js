define(['jquery','template'],function($,template){
  $.ajax({
    type : 'get',
    url : '/api/course',
    datatype : 'json',
    success : function(data){
     if(data.code == 200){
       var html = template('courseListTpl',data)
      $("#courseListInfo").html(html)
     }
    }
  })
})