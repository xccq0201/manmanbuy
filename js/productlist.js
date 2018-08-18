$(function(){
    //获取地址栏信息
    var cateInfo = window.location.search;
    // 截取分类名信息,通过decodeURI进行解码
    var categoryName =decodeURI(cateInfo.split('&')[1].split('=')[1]);
    // 截取分类名id
    var categoryId = +cateInfo.split('&')[0].split('=')[1];
    var pageId = 1;
    $('.categoryName').text(categoryName);
    render();
    function render(){

        $.ajax({
            type:"get",
            url:"http://mmb.ittun.com/api/getproductlist",
            data : {
                categoryid : categoryId,
                pageid : pageId
            },
            dataType : "json",
            success :function(info) {
                var htmlStr = template('temp',info);
                $('.content ul').html(htmlStr);
            }
        })
    }
})