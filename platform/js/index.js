// 获取content的高度
var contentH = $('.content').height();
$('.view').css('height',contentH);


// 公告通知效果
$('#bulletin').hover(function(){
    $('#bulletin').animate({right:"0px"});
    $('.notice>i').removeClass('glyphicon-triangle-left').addClass('glyphicon-triangle-right');
},function(){
    $('#bulletin').animate({right:"-360px"});
    $('.notice>i').removeClass('glyphicon-triangle-right').addClass('glyphicon-triangle-left');
})


