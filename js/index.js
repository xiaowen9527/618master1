
var PageAnimate = (function () {
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
    } else {
        $('.ce-618').fadeOut()
    }

});

nav168($('.nav618-1'), '367px', '347px', '378px', '398px', 100)
nav168($('.nav618-2'), '318px', '298px', '645px', '665px', 100)
nav168($('.nav618-3'), '340px', '320px', '990px', '990px', 100)
nav168($('.nav618-4'), '380px', '360px', '1265px', '1265px', 100)

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



$('.register-menu-btn').click(function () {
    $('.register-dialog-box li').eq($(this).index()).addClass('w-block').siblings().removeClass('w-block')
})
$('.register-close').click(function () {
    $('.register-dialog').fadeOut()
    $('.register-dialog-box li').removeClass('w-block')
})
$('.ce-menu a').click(function () {
    $('.ce-menu a').removeClass('w-active')
    $(this).addClass('w-active')
})


var chongzhi = 0;

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
$('#chongzhi-l').click(function () {
    chongzhi--;
    if (chongzhi < 0) { $('.chongzhi-list-box ul').css('left', -$('.chongzhi-list-box ul').width() / 2 + 'px'); chongzhi = $('.chongzhi-list-box li').length / 2 - 1; }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
})
var chongzhi_timer = setInterval(chongzhi_time, 2000)
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
$('.chongzhi-list').mouseenter(function () {
    clearInterval(chongzhi_timer)
})
$('.chongzhi-list').mouseleave(function () {

    chongzhi_timer = setInterval(chongzhi_time, 2000)
})






var xuan = 0;

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


$('#xuan-l').click(function () {
    xuan--;
    if (xuan < 0) { $('.xuan-conent-box ul').css('left', -$('.xuan-conent-box ul').width() / 2 + 'px'); xuan = $('.xuan-conent-box li').length / 2 - 1; }
    $('.xuan-conent-box ul').stop().animate({
        'left': -(xuan * 249) + 'px'
    })
})


var xuan_timer = setInterval(xuan_time, 2000)

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

$('.xuan-conent').mouseenter(function () {
    clearInterval(xuan_timer)
})
$('.xuan-conent').mouseleave(function () {

    xuan_timer = setInterval(xuan_time, 2000)
})


var tisheng = 0;

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

$('#tisheng-l').click(function () {
    tisheng--;
    if (tisheng < 0) { $('.tisheng-list-box ul').css('left', -$('.tisheng-list-box ul').width() / 2 + 'px'); tisheng = $('.tisheng-list-box li').length / 2 - 1; }
    $('.tisheng-list-box ul').stop().animate({
        'left': -(tisheng * 527) + 'px'
    })
})


var tisheng_timer = setInterval(tisheng_time, 2000)

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

$('.tisheng-list').mouseenter(function () {
    clearInterval(tisheng_timer)
})
$('.tisheng-list').mouseleave(function () {

    tisheng_timer = setInterval(tisheng_time, 2000)
})







$(function () {
    var payMethod = true 
    // 点击充值
    $('.chongzhi').bind('click', function () {
        $('.ars-pay').show()
        // $('.ars-pay-tip').html('<span>实际支付:</span>' + $(this).siblings().text() + '.00' + '<small>元</small>')
    })

    // 选择支付方式
    $('.ars-pay-item').click(function () {
        console.log('sdfsdf')
        $(this).addClass('ars-active').siblings().removeClass('ars-active')
        payMethod = !payMethod
        if (payMethod == true) {
            $('#zhifubao').hide()
            $('#weixin').show()
        } else {
            $('#zhifubao').show()
            $('#weixin').hide()
        }
    })

    //关闭充值
    $('.ars-pay-close').click(function () {
        $('.ars-pay').hide()
    })

    // 立即支付（选择微信）
    $('#weixin').click(function () {
        $('.ars-pay').hide()
        $('.ars-weixin').show()
    })
    // 关闭微信二维码弹出框
    $('.ars-weixin-close').click(function () {
        $('.ars-weixin').hide()
    })

})








