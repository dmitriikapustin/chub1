$(document).ready(function () {
    if ($(window).width() > 1000) {
        $('.svg-hover').each(function () {
            $(this).css({ "transform": "scale(" + $(window).width() / 1440 + ")" })
        })
        $('.svg-hover-1').css({ "left": 20 + ($(window).width() / 1440 - 1) * 50 + "%", "top": -50 + ($(window).width() / 1440 - 1) * 100 + "%" })
        $('.svg-hover-2').css({ "left": 0 + ($(window).width() / 1440 - 1) * 50 + "%", "top": -50 + ($(window).width() / 1440 - 1) * 100 + "%" })
        $('.svg-hover-3').css({ "left": 15 + ($(window).width() / 1440 - 1) * 50 + "%", "top": -28 + ($(window).width() / 1440 - 1) * 100 + "%" })
    }
})