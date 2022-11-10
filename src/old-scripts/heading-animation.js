$(document).ready(function () {

    // Set ScrollMagic controller 
    var controller_heading_anim = new ScrollMagic.Controller({container: "body"})


    // ScrollMagic animation for circles timeline
    var scene = new ScrollMagic.Scene({ triggerElement: '#big-text', duration: 1000, reverse: true })
        .offset($('#big-text').height() / 2)
        .setTween(".animated_heading_item", { scale: 0.25 } )
        // .addIndicators()
        .addTo(controller_heading_anim);

    var scene = new ScrollMagic.Scene({ triggerElement: '#big-text', duration: 1000, reverse: true })
        .offset($('#big-text').height() / 2)
        .setPin( '#big-text' )
        // .addIndicators()
        .addTo(controller_heading_anim); 
        
})