define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util){
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

  // 实现表单提交
  function submitFrom(url){
    $('#teacherForm').validate({
      sendForm : false,
      valid : function(){
        $(this).ajaxSunmit({
          type : 'post',
          url : url,
          dataType : 'json',
          success : function(data){
            if(data.code == 200){
                      location.href = '/teacher/list'
                     }
          }
        })
      },
      description : {
        tcName : {
          required : '用户名不能为空'
        },
        tcPass : {
          required : '密码不能为空',
          pattern : '密码必须为6位数字'
        },
        pcJoinDate : {
          required : '日期不能为空'
        }
      }
    })
  }
  // function submitFrom(url){
  //   $('#teachBtn').click(function(){
  //     $.ajax({
  //       type : 'post',
  //       url : url,
  //       data : $('#teacherForm').serialize(),
  //       dataType : 'json',
  //       success : function(data){
  //        if(data.code == 200){
  //         location.href = '/teacher/list'
  //        }
  //       }
  //     })
  //   })
  // } 
})
