
$(document).ready(function () {
    var parapraphs = $(".animated-paragraph_item");
    var paragraph_count = parapraphs.length;

    $(".animated-paragraph_item").each(function (paragraph_index) {
        $(this).addClass("paragraph-index-" + paragraph_index)

        $(this).parent().prepend('<div class="trigger-for-animated-paragraph-' + paragraph_index + ' trigger"></div>');
    })

    var controller_p_animation = new ScrollMagic.Controller();

    for (paragraph_index = 0; paragraph_index < paragraph_count; paragraph_index++) {

        $('.paragraph-index-' + paragraph_index + " span").each(function (index) {
            // $(this).addClass('ov-hidden')
            var tl = new TimelineMax();
            tl.to(this, 100000, { y: 0 });

            var scene = new ScrollMagic.Scene({
                offset: 0 + 15 * index,
                triggerElement: ".trigger-for-animated-paragraph-" + paragraph_index,
                triggerHook: 0.6,
                duration: 69,
                reverse: true
            })
                //.addIndicators()
                .setTween(tl)
                .addTo(controller_p_animation);
        });
    }
})