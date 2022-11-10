
$(document).ready(function () {

    // Count headings with animation for full page
    var headings_animated = $('.words-wrapped');
    var headings_count = headings_animated.length;

    // Wrap words in headings
    $('.words-wrapped').each(function (heading_index) {
        var words = $(this).text().split(/\s+/);
        var total = words.length;
        

        // Set class with heading index for everyone
        $(this).addClass('heading-index-' + heading_index)

        // Craete triggers for animated headigs
        $(this).parent().prepend('<div class="trigger-for-animated-title-' + heading_index + ' trigger"></div>');

        // Clear heading text and create spans
        $(this).empty();
        for (index = 0; index < total; index++) {
            $(this).append($("<span /> ").addClass("animated-span-" + index).addClass("anim-heading-span").text(words[index]));
        }
    });

    // Set controller
    var controller_anim_h = new ScrollMagic.Controller();

    // Set ScrollMagic animation for every title
    for (heading_index = 0; heading_index < headings_count; heading_index++) { 

        // Function for each animation from down
        $('.heading-index-'+ heading_index +' .anim-heading-span').each(function(index) {
            var tl = new TimelineMax();
            tl.to(this, 100000 , {y: 0});
    
            var scene = new ScrollMagic.Scene({
                offset: 0 + 30 * index,
                triggerElement: ".trigger-for-animated-title-" + heading_index,
                triggerHook: 0.7,
                duration: 100,
                reverse: true
            })
            .setTween(tl)
            .addTo(controller_anim_h);
        });
    }

});