$(function () {
    var effect_btm = 50; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 100; // どのぐらい要素を動かすか(px)
    var effect_time = 1500; // エフェクトの時間(ms) 1秒なら1000

    $('.wrapper').css({
        opacity: 0
    });

    $('.wrapper').children().each(function () {
        $(this).css({
            opacity: 0,
            transform: 'translateY(' + effect_move + 'px)',
            transition: effect_time + 'ms'
        });
    });

    $(window).on('load', function () {
        var scroll_top = $(window).scrollTop();
        var scroll_btm = scroll_top + $(window).height();
        var effect_pos = scroll_btm - effect_btm;

        $('.wrapper').each(function () {
            var this_pos = $(this).offset().top;
            if (effect_pos > this_pos) {
                $(this).css({
                    opacity: 1,
                    // transform: 'translateY(0)'
                });
                $(this).children().each(function (i) {
                    $(this).delay(200 + i * 400).queue(function () {
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            };
        });

    });

});