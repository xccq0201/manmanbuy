$(function(){
    // 分类导航数据获取
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getindexmenu",
        dataType:"json",
        success:function(info){
            var htmlStr= template("temp_cate",info);
            $('.category ul').html(htmlStr);
        }
    });

    $.ajax({
        type:"get",
        url:"http://mmb.ittun.com/api/getmoneyctrl",
        dataType:"json",
        success:function(info){
            console.log(info);
            var htmlStr= template("temp_pro",info);
            $('.product ul').html(htmlStr);
        }
    })
})