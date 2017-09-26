define(['jquery','form'],function($,form){
  $("#courseBtn").click(function(){
    $("#courseForm").ajaxSubmit({
      type : 'post',
      url :  '/api/course/create',
      dataType : 'json',
      success : function(data){
        if(data.code == 200){
          location.href='/course/basic?cs_id='+data.result.cs_id;
        }
      }
    })
  })
})