define(['jquery','template','ckeditor','datepicker','language','validate','form','region','uploadify'],function($,template,CKEDITOR,datepicker,language,validate,form){
  $.ajax({
    type : 'get',
    url : '/api/teacher/profile',
    datatype : 'json',
    success : function(data){
      var html = template('settingsTpl',data.result)
      $("#settingsInfo").html(html);
      // 处理头像上传
      $('#upfile').uploadify({
        width : 120,
        height : 120,
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/avatar',
        fileObjName : 'tc_avatar',
        buttonText : '',
        itemTemplate : '<span></span>',
        onUploadSuccess : function(a,b){
          var obj = JSON.parse(b)
          $('.preview img').attr('src',obj.result.path)
        }
      })
      // 处理省市
      $('#pcd').region({
        url : '/public/assets/jquery-region/region.json'
      })
      // 处理富文本
     CKEDITOR.replace('editor',{
      toolbarGroups : [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'forms', groups: [ 'forms' ] },
      ]
     })
    //  处理表单验证
    $("#settingsForm").validate({
      sendForm : false,
      valid : function () {
        var  p = $("#p").find('option:selected').text();
        var  c = $("#c").find('option:selected').text();
        var  d = $("#d").find('option:selected').text();
        var hometown = p + '|' + c + '|' + d;
        $(this).ajaxSubmit({
          type : 'post',
          url : '/api/teacher/modify',
          data : {tc_hometown : hometown},
          dataType : 'json', 
          success : function(data){
            if(data.code == 200){
              // 修改成功刷新当前页面
              location.reload();
            }
          }
        })
      }
    })
    }
  })
})