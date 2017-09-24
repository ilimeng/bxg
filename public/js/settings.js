define(['jquery','template','uploadify'],function($,template){
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
    }
  })
})