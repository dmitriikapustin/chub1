$(document).ready(function () {

    // Set ScrollMagic controller and duration
    var controller_cards_anim = new ScrollMagic.Controller();
    var cards_anim_duration = 1600;

     // Set timeline with zero delay after parameters
     var cards_animation_timeline = new TimelineMax()
        .to(".card_1", { transform: 'rotate(-15deg) translate3d(10%, 15%, 0)' }, 0)
        .to(".card_2", { transform: 'rotate(-8deg) translate3d(50%, 35%, 0)' }, 0)
        .to(".card_3", { transform: 'rotate(0deg) translate3d(90%, 55%, 0)' }, 0);

        // ScrollMagic animation for cards timeline
        var scene = new ScrollMagic.Scene({
            triggerElement: '.cards',
            duration: cards_anim_duration,
            reverse: true
        })
        .offset($(window).height() * 0.5 - 770)
        .setTween(cards_animation_timeline)
        .addTo(controller_cards_anim)

 


});