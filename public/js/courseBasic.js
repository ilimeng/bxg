define(['jquery','util','template','ckeditor'],function($,util,template,CKEDITOR){
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
    if(flag){
      data.result.operate = '课程编辑'
    }else{
      data.result.operate = '课程添加'
    };
    var html = template('besicTpl',data.result);
    $("#basicInfo").html(html);
    $("#change").change(function(){
      var cgID = $(this).val();
      $.ajax({
        type : 'get',
        url : '/api/category/child',
        data:{cg_id : cgID},
        dataType:'json',
        success : function(data){
          var tpl = '<option>请选择二级分类...</option>{{each list}}<option value="$value.cg_id">{{$value.cg_name}}</option>{{/each}}';
          var html = template.render(tpl,{list:data.result})
          $("#secondType").html(html)
        }
      })
    })
    CKEDITOR.replace('editor',{
      toolbarGroups : [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'forms', groups: [ 'forms' ] },
      ]
    });
  }
})
})