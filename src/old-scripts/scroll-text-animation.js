$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_text_anim = new ScrollMagic.Controller();
    var text_anim_duration = 4800;


    // Set timeline with zero delay after parameters
    var text_animation_timeline = new TimelineMax()
        .to(".scrolling-item1", {x: '0'}, 0)
        .to(".scrolling-item2", {x: '-100%'}, 0)

    // ScrollMagic animation for texts timeline
    var scene = new ScrollMagic.Scene({
        triggerElement: '.scrolling-text-trigger',
        duration: text_anim_duration,
        reverse: true
    })
    .offset($(window).height() * 0.5 - 680)
    .setTween(text_animation_timeline)
    .addTo(controller_text_anim)
})