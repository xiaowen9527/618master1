







    $('.register-menu-btn').click(function(){
        $('.register-dialog-box li').eq($(this).index()).addClass('w-block').siblings().removeClass('w-block')
    })

    $('.register-close').click(function(){
        $('.register-dialog').fadeOut()
    })

    $('.ce-menu a').click(function(){
        $('.ce-menu a').removeClass('w-active')
        $(this).addClass('w-active')
    })


//轮播index
var chongzhi = 0;

// 充值右边
$('#chongzhi-r').click(function () {
    chongzhi++;
    if (chongzhi < 0) { chongzhi = 0 }
    if (chongzhi == $('.chongzhi-list-box li').length / 2 + 1) {
        $('.chongzhi-list-box ul').css('left', 0)
        chongzhi = 1
    }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
})
// 充值左边
$('#chongzhi-l').click(function () {
    chongzhi--;
    if (chongzhi < 0) { $('.chongzhi-list-box ul').css('left', -$('.chongzhi-list-box ul').width() / 2 + 'px'); chongzhi = $('.chongzhi-list-box li').length / 2 - 1; }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
})
// 定时器
var chongzhi_timer = setInterval(chongzhi_time, 2000)
// 定时器函数
function chongzhi_time() {
    chongzhi++;
    if (chongzhi < 0) { chongzhi = 0 }
    if (chongzhi == $('.chongzhi-list-box li').length / 2 + 1) {
        $('.chongzhi-list-box ul').css('left', 0)
        chongzhi = 1
    }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
}
// 清除定时器
$('.chongzhi-list').mouseenter(function () {
    clearInterval(chongzhi_timer)
})
$('.chongzhi-list').mouseleave(function () {
    // 定时器
    chongzhi_timer = setInterval(chongzhi_time, 2000)
})




// 渲粉

var xuan = 0;
// 渲粉右边
$('#xuan-r').click(function () {
    xuan++;
    if (xuan < 0) { xuan = 0 }
    if (xuan == $('.xuan-conent-box li').length / 2 + 1) {
        $('.xuan-conent-box ul').css('left', 0)
        xuan = 1
    }
    $('.xuan-conent-box ul').stop().animate({
        'left': -(xuan * 249) + 'px'
    })
})

// 渲粉左边
$('#xuan-l').click(function () {
    xuan--;
    if (xuan < 0) { $('.xuan-conent-box ul').css('left', -$('.xuan-conent-box ul').width() / 2 + 'px'); xuan = $('.xuan-conent-box li').length / 2 - 1; }
    $('.xuan-conent-box ul').stop().animate({
        'left': -(xuan * 249) + 'px'
    })
})

// 定时器
var xuan_timer = setInterval(xuan_time, 2000)
// 定时器函数
function xuan_time() {
    xuan++;
    if (xuan < 0) { xuan = 0 }
    if (xuan == $('.xuan-conent-box li').length / 2 + 1) {
        $('.xuan-conent-box ul').css('left', 0)
        xuan = 1
    }
    $('.xuan-conent-box ul').stop().animate({
        'left': -(xuan * 249) + 'px'
    })
}
// 清除定时器
$('.xuan-conent').mouseenter(function () {
    clearInterval(xuan_timer)
})
$('.xuan-conent').mouseleave(function () {
    // 定时器
    xuan_timer = setInterval(xuan_time, 2000)
})


// 提升
var tisheng = 0;
// 提升右边
$('#tisheng-r').click(function () {
    tisheng++;
    if (tisheng < 0) { tisheng = 0 }
    if (tisheng == $('.tisheng-list-box li').length / 2 + 1) {
        $('.tisheng-list-box ul').css('left', 0)
        tisheng = 1
    }
    $('.tisheng-list-box ul').stop().animate({
        'left': -(tisheng * 527) + 'px'
    })
})
// 渲粉左边
$('#tisheng-l').click(function () {
    tisheng--;
    if (tisheng < 0) { $('.tisheng-list-box ul').css('left', -$('.tisheng-list-box ul').width() / 2 + 'px'); tisheng = $('.tisheng-list-box li').length / 2 - 1; }
    $('.tisheng-list-box ul').stop().animate({
        'left': -(tisheng * 527) + 'px'
    })
})

// 定时器
var tisheng_timer = setInterval(tisheng_time, 2000)
// 定时器函数
function tisheng_time() {
    tisheng++;
    if (tisheng < 0) { tisheng = 0 }
    if (tisheng == $('.tisheng-list-box li').length / 2 + 1) {
        $('.tisheng-list-box ul').css('left', 0)
        tisheng = 1
    }
    $('.tisheng-list-box ul').stop().animate({
        'left': -(tisheng * 527) + 'px'
    })
}
// 清除定时器
$('.tisheng-list').mouseenter(function () {
    clearInterval(tisheng_timer)
})
$('.tisheng-list').mouseleave(function () {
    // 定时器
    tisheng_timer = setInterval(tisheng_time, 2000)
})
















