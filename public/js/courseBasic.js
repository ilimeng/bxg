define(['jquery','util','template'],function($,util,template){
$("#aAdd").addClass('active').parent().parent().show();
// 获取课程ID
var csId = util.qs('cs_id')
// 获取编辑列表标记操作ID
var flag = util.qs('flag')
$.ajax({
  type : 'get',
  url:'/api/course/basic',
  data : {cs_id : csId},
  dataType : 'json',
  success :function(data){
    console.log(data)
    if(flag){
      data.result.operate = '课程编辑'
    }else{
      data.result.operate = '课程添加'
    };
    var html = template('besicTpl',data.result);
    $("#basicInfo").html(html)
  }
})
})