$(document).ready(function () {

    // Set controller
    var controller_3d_images = new ScrollMagic.Controller();

    // Set up scene
    var scene = new ScrollMagic.Scene({
            triggerElement: '.pseudo-3d-trigger',
            reverse: true
        })
        .offset(0)
        .setClassToggle(".pseudo-3d-item", "active-pseudo-3d") 
        .addTo(controller_3d_images)

});