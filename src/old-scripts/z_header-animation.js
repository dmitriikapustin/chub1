$(document).ready(function () {
    var controller_header_hide_animation = new ScrollMagic.Controller();


    var scene = new ScrollMagic.Scene({
        duration: 200,
        triggerElement: ".footer-margin",
        triggerHook: 0.4,
        reverse: true
    })
    .addIndicators()
    .setTween(".header", {y: "-100%"})
    .addTo(controller_header_hide_animation)
})