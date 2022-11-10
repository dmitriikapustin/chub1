// var checkScrollSpeed = (function(settings){
//     settings = settings || {};
  
//     var lastPos, newPos, timer, delta, 
//         delay = settings.delay || 10; // in "ms" (higher means lower fidelity )
  
//     function clear() {
//       lastPos = null;
//       delta = 0;
//     }
  
//     clear();
    
//     return function(){
//       newPos = window.scrollY;
//       if ( lastPos != null ){ // && newPos < maxScroll 
//         delta = newPos -  lastPos;
//       }
//       lastPos = newPos;
//       clearTimeout(timer);
//       timer = setTimeout(clear, delay);
//       return delta;
//     };
// })();

// $(".images-30-70 .container").css({"transition":"all 0.1s"})


// $(window).scroll(function () {
    
    
//     // $(".images-30-70 .container").each(function(){
//         //     // $(this).css({"transform":"rotateX(45deg)","perspective":"100px","transition":".3s all"})
//         // })
    
//     //setTimeout(function() {
//         const card = document.querySelector(".images-30-70 .container");
//         var scrollspeed = checkScrollSpeed();
//         //console.log(scrollspeed)
        
//         var lastScrollTop = 0;
    
//         // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
//         //window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//            var st = window.pageYOffset || document.documentElement.scrollTop;
//            //console.log(st - lastScrollTop)
    
//               // downscroll code
//               //card.style.transform = `perspective(${scrollspeed * 20}px) rotateX(${scrollspeed / 4}deg) rotateY(0deg) scale3d(1, 1, 1)`;
//             if (scrollspeed > 0) {
//                 card.style.transform = `perspective(${scrollspeed * 20 - 1}px) rotateX(${scrollspeed / 4 - 1}deg) rotateY(0deg) scale3d(1, 1, 1)`;
//             }
//               // upscroll code
//             //   card.style.transform = `perspective(-500px) rotateX(-5deg) rotateY(0deg) scale3d(1, 1, 1)`;
//             if (scrollspeed < 0) {
//                 card.style.transform = `perspective(${scrollspeed * 20 + 1}px) rotateX(${scrollspeed / 4 + 1}deg) rotateY(0deg) scale3d(1, 1, 1)`;
//             }

//     //}, 20)
        
    

    


//     // DETECTION OF STOPPING SCROLLING

//     $(window).scroll(function() {
//         if (scrollspeed === 0) {
//             clearTimeout($.data(this, 'scrollTimer'));
//             $.data(this, 'scrollTimer', setTimeout(function() {
//                 card.style.transform = `perspective(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
//                 console.log("Haven't scrolled in 250ms!");
//             }, 100));
//         }
        
//     });

 

    
// });




// // listen to "scroll" event
// window.onscroll = function(){
//   console.log( checkScrollSpeed() );
// };