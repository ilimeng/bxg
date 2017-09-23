define(['jquery','template','util','datepicker','language'],function($,template,util){
 var tcId = util.qs('tc_id')
  if(tcId){
    $.ajax({
      type : 'get',
      url : '/api/teacher/edit',
      data : {tc_id : tcId},
      dataType : 'json',
      success : function(data){
        if(data.code == 200){
          data.result.tc_js = '修改讲师' 
          var html = template('teachEdit',data.result);
          $('#teachInfo').html(html);
          submitFrom("/api/teacher/update");
        } 
      }
    })
  }else{
    var html = template('teachEdit',{tc_js:'添加讲师'});
    $('#teachInfo').html(html)
     submitFrom("/api/teacher/add");
  }

  function submitFrom(url){
    $('#teachBtn').click(function(){
      $.ajax({
        type : 'post',
        url : url,
        data : $('#teacherForm').serialize(),
        dataType : 'json',
        success : function(data){
         if(data.code == 200){
          location.href = '/teacher/list'
         }
        }
      })
    })
  }
})
