
//页面效果
var PageAnimate = (function () {
    //碎片跟随鼠标动
    $('.logo618').each(function () {
        $(this).data('left', parseInt($(this).css('left').match(/^-?\d*/)[0]));
        $(this).data('top', parseInt($(this).css('top').match(/^-?\d*/)[0]));
    });
    document.onmousemove = function (event) {
        var e = event || window.event;
        var siteX = e.clientX;
        var siteY = e.clientY;
        $('.logo618').each(function () {
            $(this).css("left", siteX / $(this).data("sum") + parseInt($(this).data('left')));
            $(this).css("top", siteY / $(this).data("sum") + parseInt($(this).data('top')));
        });
    };
})();

// logo进场缩小
setTimeout(function () {
    $('.logo618').animate({
        'top': '200px',
        'width': '765px',
        'opacity': '1'
    }, 500)
    $('.nav168').css('opacity', '1')
}, 300)

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 1000) {
        $('.ce-618').fadeIn()
    }else{
        $('.ce-618').fadeOut()
    }

});

// 四个牌子
nav168($('.nav618-1'), '367px', '347px', '378px', '398px', 100)
nav168($('.nav618-2'), '318px', '298px', '645px', '665px', 100)
nav168($('.nav618-3'), '340px', '320px', '990px', '990px', 100)
nav168($('.nav618-4'), '380px', '360px', '1265px', '1265px', 100)

//四个牌子函数
function nav168(e, width, widthed, left, lefted, speed) {
    e.hover(function () {
        $(this).find('img').eq(1).css('display', 'none')
        $(this).find('img').eq(0).css('display', 'block')
        $(this).stop().animate({
            "width": width,
            'left': left
        }, speed)
    }, function () {
        $(this).find('img').eq(0).css('display', 'none')
        $(this).find('img').eq(1).css('display', 'block')
        $(this).stop().animate({
            "width": widthed,
            'left': lefted
        }, speed)
    })
}

 
     
    // 福利
    $( '.register-menu-btn').click(function(){
         $('.register-dialog-box li').eq($(this).index()).addClass('w-block').siblings().removeClass('w-block')
    })
// 关闭福利弹窗
    $('.register-close').click(function(){
        $('.register-dialog').fadeOut()
    })
//右侧导航
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
















