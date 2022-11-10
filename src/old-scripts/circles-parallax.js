$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_parallax = new ScrollMagic.Controller({
        container: "body"
    })

    // Set timeline with zero delay after parameters
    var circles_animation_timeline = new TimelineMax()
        .to(".circle__1", { y: '100vh' }, 0)
        .to(".circle__2", { y: '85vh' }, 0)
        .to(".circle__3", { y: '70vh' }, 0);
    
    // ScrollMagic animation for circles timeline
    var scene = new ScrollMagic.Scene({
            triggerElement: '.block__1__shapes',
            duration: 300,
            reverse: true
        })
        .offset($(window).height() * 0.5)
        .setTween(circles_animation_timeline)
        .addTo(controller_parallax)
        
})