// 當頁面 準備完成時
$(document).ready(function () {

    // 當視窗 捲動時
    $(window).scroll(function () {
        
        // var 變數 = 資料
        var offset = $("#test").offset();       // 取得元素位移資料
        var top = offset.top;                   // 上方
        var left = offset.left;                 // 左方

        console.log("元素的上方：" + top);

        var windowTop = $(window).scrollTop();

        console.log("視窗的上方：" + windowTop);
    });



});
