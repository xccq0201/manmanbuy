$(function(){
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

    var url ="http://mmb.ittun.com/api/getcategory?titleid=";
    $('.mm-main .nav').on('click','.cate-up',function(){
        var titleId = $(this).data("id");
        $.ajax({
            type:"get",
            url: url + titleId,
            dataType:"json",
            success:function(info){
                var  htmlStr = template("temp_link",info);
                $('.cate-goods').eq(titleId).html(htmlStr);
                $('.cate-goods').eq(titleId).stop().toggleClass('current');
            }
        })
    })
})