$(function(){

    // 进入页面获取大分类数据
    $.ajax({
        type:"get",
        url:"http://mmb.ittun.com/api/getcategorytitle",
        dataType:"json",
        success: function(info){
            console.log(info);
            var htmlStr = template("temp_nav",info);
            $('.mm-main .nav').html(htmlStr);
        }
    });

    //大分类点击事件,小分类展开 
    var url ="http://mmb.ittun.com/api/getcategory?titleid=";
    $('.mm-main .nav').on('click','.cate-up',function(){
        var titleId = $(this).data("id");
        $.ajax({
            type:"get",
            url: url + titleId,
            dataType:"json",
            success:function(info){
                console.log(info);
                var  htmlStr = template("temp_link",info);
                $('.cate-goods').eq(titleId).html(htmlStr);
                $('.cate-goods').eq(titleId).stop().toggleClass('current');
            }
        })
    })

    //小分类点击事件,跳转到产品列表页面
    $('.mm-main .nav').on('click','.up',function(){
        //获取点击的分类
        var txt = $(this).text();
        // 获取分类的id
        var categoryId = $(this).data('cateid');
        //获取地址栏
        var href = $(this).attr('href');
        // 地址栏与分类信息进行拼接
        href += "?categoryid="+categoryId +"&category=" + txt ;
        href = $(this).attr('href',href);        
    })

})