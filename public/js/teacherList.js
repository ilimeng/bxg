define(['jquery','template','bootstrap'],function($,template){
 $.ajax({
    type : 'get',
     url : '/api/teacher',
     dataType : 'json',
     success : function(data){
        //  数据填充
        var html = template('teacherlist',{list:data.result})
        $('#teacherInfo').html(html)

        // 注销功能
        $(".logout").click(function(){
            var that = this;
            var td = $(this).parent();
            var tcId = td.attr('data-tcId')
            var status = td.attr('data-status')
            $.ajax({
                type : 'post',
                url : '/api/teacher/handle',
                data : {tc_id : tcId , tc_status : status},
                dataType : 'json',
                success : function (data){
                  if( data.code == 200){
                    td.attr('data-status',data.result.tc_status)
                    if(data.result.tc_status ==0){
                        $(that).text('注销')
                    }else{
                        $(that).text('启用')
                    }
                  }
                }
            })
        })

        // 查看功能
        $(".check").click(function(){
            var tc_id = $(this).attr('data-tcId');
            $.ajax({
                type : 'get',
                url : '/api/teacher/view',
                data: {tc_id : tc_id},
                dataType : 'json',
                success : function(data){
                    var html = template('teacherCheck',data.result)
                    $("#modalInfo").html(html);
                    $("#teacherModal").modal();
                }
            })
        })
     }
 })
})
