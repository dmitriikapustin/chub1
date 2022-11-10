$(document).ready(function () {
    // LINES ANIMATION
    if ($( window ).width() <= 1600 ) {
        
    console.log("LESS")
    var duration = 800;
    var offset = -50;



    var controller_logo_animation = new ScrollMagic.Controller();

    var hide_letters_timeline = new TimelineMax()
        .to(".u", { x: '-100%' }, 0)
        .to(".u", 0.05, { opacity: '0' }, 0.4)
        .to(".n", { x: '-200%' }, 0)
        .to(".n", 0.05, { opacity: '0' }, 0.4)
        .to(".r", { x: '-400%' }, -0.1)
        .to(".r", 0.05, { opacity: '0' }, 0.3)
        .to(".e", { x: '-600%' }, -0.1)
        .to(".e", 0.05, { opacity: '0' }, 0.3)
        .to(".s", { x: '-700%' }, -0.1)
        .to(".s", 0.05, { opacity: '0' }, 0.3)
        .to(".h", { x: '-800%' }, -0.1)
        .to(".h", 0.05, { opacity: '0' }, 0.3)
        .to(".second-f", { x: '-375%' }, 0)
        .to(".ampersand", { x: '-270%' }, 0)
        .to(".text-change", 0.1, { x: '-150%', ease: Linear.easeNone }, 0.2)

    var scene = new ScrollMagic.Scene({
        offset: offset,
        triggerElement: '.hero-title',
        triggerHook: 0,
        reverse: true
    })
        .setTween(hide_letters_timeline)
        .addTo(controller_logo_animation)
    }  

    if ($( window ).width() > 1600 ) {

        var offset = -50;
        console.log("MORE")

    
    
        var controller_logo_animation = new ScrollMagic.Controller();
    
        var hide_letters_timeline = new TimelineMax()
            .to(".u", { x: '-100%' }, 0)
            .to(".u", 0.05, { opacity: '0' }, 0.4)
            .to(".n", { x: '-200%' }, 0)
            .to(".n", 0.05, { opacity: '0' }, 0.4)
            .to(".r", { x: '-400%' }, -0.1)
            .to(".r", 0.05, { opacity: '0' }, 0.3)
            .to(".e", { x: '-600%' }, -0.1)
            .to(".e", 0.05, { opacity: '0' }, 0.3)
            .to(".s", { x: '-700%' }, -0.1)
            .to(".s", 0.05, { opacity: '0' }, 0.3)
            .to(".h", { x: '-800%' }, -0.1)
            .to(".h", 0.05, { opacity: '0' }, 0.3)
            .to(".second-f", { x: '-375%' }, 0)
            .to(".ampersand", { x: '-270%' }, 0)
            .to(".text-change", 0.1, { x: '-120%', ease: Linear.easeNone }, 0.2)
    
        var scene = new ScrollMagic.Scene({
            offset: offset,
            triggerElement: '.hero-title',
            triggerHook: 0,
            reverse: true
        })
            .setTween(hide_letters_timeline)
            .addTo(controller_logo_animation)
    }
})