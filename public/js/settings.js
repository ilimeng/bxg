define(['jquery','template'],function($,template){
  $.ajax({
    type : 'get',
    url : '/api/teacher/profile',
    datatype : 'json',
    success : function(data){
      console.log(data)
      var html = template('settingsTpl',data.result)
      $("#settingsInfo").html(html)
    }
  })
})