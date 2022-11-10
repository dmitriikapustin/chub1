// import DrawSVGPlugin 
// gsap.registerPlugin(DrawSVG)
var counting = setInterval(function () {
    var loader = document.getElementById("percentage");
    var currval = parseInt(loader.innerHTML);
    var Width = 99 - currval;
    var loadscreen = document.getElementById("loader-progress");
    var parapraphs_h = $(".animated-paragraph_item_no-scroll_h");
    var parapraphs_1 = $(".animated-paragraph_item_no-scroll_1");
    var parapraphs_2 = $(".animated-paragraph_item_no-scroll_2");
    var svg_animation = $('.svg-animation_item_no-scroll');
    var parapraphs_h_count = parapraphs_h.length;
    var parapraphs_1_count = parapraphs_1.length;
    var parapraphs_2_count = parapraphs_2.length;
    var svg_count = svg_animation.length;
    var svg_paths_count = 0;

    $(".animated-paragraph_item_no-scroll_h").each(function (paragraph_h_index) {
        $(this).addClass("paragraph_h-index-" + paragraph_h_index)
    })

    $(".animated-paragraph_item_no-scroll_1").each(function (paragraph_1_index) {
        $(this).addClass("paragraph_1-index-" + paragraph_1_index)
    })


    $(".animated-paragraph_item_no-scroll_2").each(function (paragraph_2_index) {
        $(this).addClass("paragraph_2-index-" + paragraph_2_index)
    })

    $('.svg-animation_item_no-scroll').each(function (svg_index) {
        $(this).addClass("svg-index-no-scroll-" + svg_index);
    })

    loader.innerHTML = ++currval;
    if (currval > 89) {
        loader.innerHTML = 90;
        if (window.jQuery) {
            //console.log('jquery loaded');
            loader.innerHTML = 95;
            if (document.readyState == "interactive") {
                loader.innerHTML = 99;
            }
            if (document.readyState == "complete") {
                //console.log('fully loaded!');
                clearInterval(counting);
                loader.innerHTML = 100;
                jQuery("body").toggleClass('page-loaded');

                // HEADER APPEARANCE

                var tl_header = new TimelineMax();
                tl_header.to($("#header"), 1.2, {y: 0}, 0)

                // HEADING APPEARANCE
                for (parapraphs_h_index = 0; parapraphs_h_index < parapraphs_h_count; parapraphs_h_index++) {
                    $('.paragraph_h-index-' + parapraphs_h_index + " span").each(function (index) {
                        var tl_1 = new TimelineMax();
                        tl_1.to(this, 0.4, { y: 0 }, 1.1 + index * 0.09);
                    });
                }

                // SVG DRAWING
                
                    for (svg_index = 0; svg_index < svg_count; svg_index++) {
                        var svg_paths_count = $(".svg-index-no-scroll-" + svg_index + " path").length;
                        
                        var unique_delay = 500 * svg_index;
                            console.log(svg_index);
                            $(".svg-index-no-scroll-" + svg_index + " path").each(function (index) {
                                $(this).addClass("path-no-scroll-" + index)
                                $(this).attr('id', "path-no-scroll-" + index);
                                var path = $('path#path-no-scroll-' + index)
                                // console.log(path)
                                var lineLength = Math.round($(this)[0].getTotalLength());
                                $(this).css("stroke-dasharray", lineLength);
                                $(this).css("stroke-dashoffset", lineLength);
                                var duration = 1.1 / svg_paths_count;
                                var delay = 1.15 / svg_paths_count * index;
                                var tween = new TimelineMax()
                                tween
                                    .to($(this), 0, 
                                    { opacity: 1, ease: Linear.easeNone }, 
                                    1 * svg_index + 2 + delay)
                                    .to($(this), duration, 
                                    { strokeDashoffset: 0, ease: Linear.easeNone }, 
                                    1 * svg_index + 2 + delay)
                            })


                    }
                



                // PARAGRAPH UNDER IMAGES APPEARANCE
                for (parapraphs_1_index = 0; parapraphs_1_index < parapraphs_1_count; parapraphs_1_index++) {
                    $('.paragraph_1-index-' + parapraphs_1_index + " span").each(function (index) {
                        var tl_1 = new TimelineMax();
                        tl_1.to(this, 0.42, { y: 0 }, 3 + index * 0.09);
                    });
                }

                // SECOND PARAGRAPH APPEARANCE
                for (parapraphs_2_index = 0; parapraphs_2_index < parapraphs_2_count; parapraphs_2_index++) {
                    $('.paragraph_2-index-' + parapraphs_2_index + " span").each(function (index) {
                        var tl_2 = new TimelineMax();
                        tl_2.to(this, 0.42, { y: 0 }, 3.6 + index * 0.09);
                    });
                }
                // IMAGES APPEARANCE

                //  SHOW CONTAINER OF IMAGES
                var tl_images = new TimelineMax();
                tl_images.to($(".team-photos"), 0.35, { x: 0, y: 0, scale: 1, rotate: "0deg" }, 2);

                //  SHOW ALL IMAGES 

                if ($(window).width() > 800) {
                    $(".team-photos picture").each(function (image_index) {
                        var tl = new TimelineMax();
                        tl.to(this, 0.8, { x: 0 + image_index * 50 }, 2.7);
                    })
                }

                //  SHOW BUTTON

                var tl_btn = new TimelineMax();
                tl_btn.to($(".fixed_button_container"), 0.1, { opacity: 1 }, 4.2)
                tl_btn.to($(".fixed_button_container"), 0.35, { y: 0 }, 4)


                ///////////  FOR MOBILE  //////////

                if ($(window).width() < 800) {
                    $(".team-photos picture").each(function (image_index) {
                        var tl = new TimelineMax();
                        tl.to(this, 0.8, { x: 0 + image_index * 32 }, 3);
                    })
                    // PARAGRAPH UNDER IMAGES APPEARANCE
                    for (parapraphs_1_index = 0; parapraphs_1_index < parapraphs_1_count; parapraphs_1_index++) {
                        $('.paragraph_1-index-' + parapraphs_1_index + " span").each(function (index) {
                            var tl_1 = new TimelineMax();
                            tl_1.to(this, 0.42, { y: 0 }, 3.4 + index * 0.09);
                        });
                    }

                    // SECOND PARAGRAPH APPEARANCE
                    for (parapraphs_2_index = 0; parapraphs_2_index < parapraphs_2_count; parapraphs_2_index++) {
                        $('.paragraph_2-index-' + parapraphs_2_index + " span").each(function (index) {
                            var tl_2 = new TimelineMax();
                            tl_2.to(this, 0.42, { y: 0 }, 2 + index * 0.09);
                        });
                    }
                }
            }
        }
    }

    var logo = document.getElementById("logo");
    logo.classList.remove("first");
    setTimeout(function () {
        logo.classList.add("loaded");
    }, 500);


    var element = document.getElementById("animpath");
    var pathLength = element.getTotalLength();

    element.style.strokeDasharray = pathLength;
    element.style.strokeDashoffset = pathLength;

    function animateRoute(e, arg) {
        // Each step we decrement the dash offset
        arg -= 10;
        if (arg < 0)
            arg = 0; // clamp to minimum 0

        element.style.strokeDashoffset = arg / 90 * pathLength;


        // We need to stop looping when the length gets to 0
        if (arg > 0) {
            // Exit callback function (closing preloader)

        }
        if (element.style.strokeDashoffset === "0px" || element.style.strokeDashoffset === "0") {
            setTimeout(function () {
                $(".preloader").addClass("take_away");
                //$(window).scrollTop(0);
            }, 500)
            setTimeout(function () {
                $(".preloader").addClass("hidden-locked")
            }, 1000)
        }
    }

    animateRoute(element, Width);

    loadscreen.style.transition = "0.10s";
    loadscreen.style.width = Width + "%";


}, 20);