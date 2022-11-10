




// import DrawSVGPlugin 
// gsap.registerPlugin(DrawSVG)
var counting = setInterval(function () {
    // var loader = document.getElementById("percentage");
    // var currval = parseInt(loader.innerHTML);
    // var Width = 99 - currval;
    // var loadscreen = document.getElementById("loader-progress");


    // $(".studio-letter").each(function (studio_letter_index) {
    //     $(this).addClass("l_s-index-" + studio_letter_index)
    // })


    // loader.innerHTML = ++currval;
    // if (currval > 89) {
    //     loader.innerHTML = 90;
    //     if (window.jQuery) {
    //         //console.log('jquery loaded');
    //         loader.innerHTML = 95;
    //         if (document.readyState == "interactive") {
    //             loader.innerHTML = 99;
    //         }
    //         if (document.readyState == "complete") {
    //             //console.log('fully loaded!');
    //             clearInterval(counting);
    //             loader.innerHTML = 100;
    //             jQuery("body").toggleClass('page-loaded');

                
    //         }
    //     }
    // }

    // var logo = document.querySelectorAll(".studio-letter");
    // console.log(logo)
    // logo.classList.remove("first");
    // setTimeout(function () {
    //     logo.classList.add("loaded");
    // }, 500);


    // var element = document.getElementById("animpath");
    // var pathLength = element.getTotalLength();

    // element.style.strokeDasharray = pathLength;
    // element.style.strokeDashoffset = pathLength;

    // function animateRoute(e, arg) {
    //     // Each step we decrement the dash offset
    //     arg -= 10;
    //     if (arg < 0)
    //         arg = 0; // clamp to minimum 0

    //     element.style.strokeDashoffset = arg / 90 * pathLength;


    //     // We need to stop looping when the length gets to 0
    //     if (arg > 0) {
    //         // Exit callback function (closing preloader)

    //     }
    //     if (element.style.strokeDashoffset === "0px" || element.style.strokeDashoffset === "0") {
    //         setTimeout(function () {
    //             $(".preloader").addClass("take_away");
    //             //$(window).scrollTop(0);
    //         }, 500)
    //         setTimeout(function () {
    //             $(".preloader").addClass("hidden-locked")
    //         }, 1000)
    //     }
    // }

    // animateRoute(element, Width);

    // loadscreen.style.transition = "0.10s";
    // loadscreen.style.width = Width + "%";
    // FIRST VARIANT



  


}, 20);


// var tl_two7two = new TimelineMax({repeat: 0})

// tl_two7two.fromTo(".t-m", {y: -100, x: 0, rotate: 0, scale: 0.8}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .6}, 0.3 )
// tl_two7two.fromTo(".t-u", {y: -100, x: 0, rotate: 0, scale: 1}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .5}, 0.6)
// tl_two7two.fromTo(".w", {y: 0, x: -20, rotate: -40, scale: 0 }, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2}, 1.1)
// tl_two7two.fromTo(".o", {y: 0, x: -20, rotate: -40, scale: 0}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2}, 1.2)
// tl_two7two.fromTo(".o-c", { scale: 0 },  { scale: 1, duration: .5}, 1.9)
// tl_two7two.fromTo(".seven", {y: 0, x: 50, rotate: 30, scaleX: -1, scale: 0}, {y: 0, x: 50, rotate: 0, scaleX: -1, scale: 1, ease: "power1.out", duration: 0.6}, 1.9)
// tl_two7two.to(".seven", 0.4, {y: 0, x: 0, rotate: 0, scaleX: 1, ease: "power4.out"}, 2.5)

// tl_two7two.fromTo(".t-u-second", {y: -100, x: 0, scale: 1}, {y: 0, x: 0, scale: 1, ease: "elastic.out(1.1, 0.3)", duration: 1.1}, 2.75 )
// tl_two7two.fromTo(".t-m-second", {y: -100, x: 0, scale: 1}, {y: 0, x: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1}, 2.7 )
// tl_two7two.fromTo(".w-second", {y: -100, x: -10, rotate: -40, scale: 0 }, {y: 10 , x: -10, rotate: -30, scale: 1, ease: "power4.out", duration: 0.3}, 1.2)
// tl_two7two.to(".w-second", 0.6, {y: 0 , x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.6)"}, 3.6 )

// tl_two7two.fromTo(".o-second", {y: 0, x: 100}, {y: 0, x: -12.5, duration: .75}, 2.9 )
// tl_two7two.to(".o-second", 0.6, {y: 0, x: 0}, 3.6)
// tl_two7two.fromTo(".o-c-second", { scale: 0 },  { scale: 1, duration: .5}, 3.8)

// SECOND VARIANT

// var tl_two7two = new TimelineMax({repeat: 0})
// tl_two7two.fromTo(".t-m", {y: -100, x: 0, rotate: 0, scale: 0.8}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .6}, 0.3 )
// tl_two7two.fromTo(".t-u", {y: -100, x: 0, rotate: 0, scale: 1}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .5}, 0.6)


// tl_two7two.fromTo()
/// "STUDIO" animation ///
 
// var studio_letters = $(".studio-letters");
// console.log(studio_letters)

// studio_letters.each(function(index) {
//     var tl_studio = new TimelineMax({repeat: 0});
//     tl_studio.fromTo(this, { y: -15, x: -10, scale: 1, opacity: 0, rotate: -40 }, { y: 0, x: 0, scale: 1, opacity: 1, rotate: 0,  ease: "power3.out", duration: 0.4 }, 4.3 + index * 0.09 );
//     // tl_studio.to(this, 0.2, { opacity: 1, ease: "elastic.out(1.1, 0.6)"}, 4.9, )
// })

/// "two7two" animation ///

// var two7two_letters = $(".two7two-letters")
// console.log(two7two_letters)




    console.log("take away")
    // setTimeout(function () {
    //     $(".preloader-gif").addClass("preloader-gif-hidden")
    // }, 6000)
    setTimeout(function () {
        $(".preloader").addClass("take_away");
        //$(window).scrollTop(0);
    }, 5720)
    setTimeout(function () {
        $(".preloader").addClass("hidden-locked")
    }, 6500)
