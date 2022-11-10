$(document).ready(function () {

    var controller_h_scroll = new ScrollMagic.Controller({
        container: "body"
    })

    // BLOCK 16 going IN and PIN
    var scene = new ScrollMagic.Scene({
            triggerElement: ".block_6",
            duration: 1000
        })
        .setTween(".block_6 .section-horizontal-scroll", {
            y: 0
        })
        .addTo(controller_h_scroll);
    var scene = new ScrollMagic.Scene({
            triggerElement: ".block_6",
            duration: 1000
        })
        .offset($(window).height() / 2)
        //.addIndicators()
        .setPin(".block_6")
        .addTo(controller_h_scroll);

    // BLOCK 16 INNER ANIMATION
    var scene = new ScrollMagic.Scene({
            triggerElement: ".block_6",
            duration: 1200
        })
        .offset($(window).height() / 2)
        .setTween(".section-horizontal-scroll", {
            x: -1000
        })
        //.addIndicators()
        .addTo(controller_h_scroll);
})