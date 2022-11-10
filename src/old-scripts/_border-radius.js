
$(document).ready(function () {
    var pictures = $(".case-block .container picture img, .case-block .container video");
    console.log(pictures);
    
    var pictures_count = pictures.length;

    pictures.each(function (pictures_index) {
        $(this).addClass("picture-index-" + pictures_index)
        $(this).parent().prepend('<div class="trigger-for-animated-pictures-' + pictures_index + ' trigger"></div>');
    })

    var controller_pictures_animation = new ScrollMagic.Controller();

    for (pictures_index = 0; pictures_index < pictures_count; pictures_index++) {

        $('.picture-index-' + pictures_index ).each(function (index) {
            // $(this).addClass('ov-hidden')
            var tl = new TimelineMax();
            tl.to(this, 100000, { borderRadius: "20px", y: 0, scale: 1.01 });

            var scene = new ScrollMagic.Scene({
                offset: 0 + 15 * index,
                triggerElement: ".trigger-for-animated-pictures-" + pictures_index,
                triggerHook: 0.6,
                duration: 130,
                reverse: true
            })
                .offset(0)
                //.addIndicators({name:"BORDER", color: "#222222"})
                .setTween(tl)
                .addTo(controller_pictures_animation);
        });
    }
})