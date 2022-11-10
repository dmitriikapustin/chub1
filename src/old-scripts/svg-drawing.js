// $(document).ready(function () {
//     function pathPrepare ($el) {
//         var lineLength = Math.round($el[0].getTotalLength());
//         $el.css("stroke-dasharray", lineLength - 0.3 );
//         $el.css("stroke-dashoffset", lineLength );
//     }

//     var $word = $("path#word");
//     var $dot = $("path#dot");

//     // prepare SVG
//     pathPrepare($word);
//     pathPrepare($dot);

//     // init controller
//     var controller = new ScrollMagic.Controller();

//     // build tween
//     var tween = new TimelineMax()
//         .to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}, 0) // draw word for 0.9
//         .to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}, 0.77)  // draw dot for 0.1

//     // build scene
//     var scene = new ScrollMagic.Scene({triggerElement: ".svg-drawing", duration: 200})
//         .setTween(tween)
//         // .addIndicators()
//         .addTo(controller);
// })                    