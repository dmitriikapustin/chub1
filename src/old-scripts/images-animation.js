$(document).ready(function () {

    // #TASK Track old browsers or slow connection


    

        
    var images = [
        "./images/frame-1.png",
        "./images/frame-2.png",
        "./images/frame-3.png",
        "./images/frame-4.png",
        "./images/frame-5.png",
        "./images/frame-1.png",
    ];


    var imagesWebp = [
        "./images/frame-1.webp",
        "./images/frame-2.webp",
        "./images/frame-3.webp",
        "./images/frame-4.webp",
        "./images/frame-5.webp",
        "./images/frame-1.webp",
    ];

    var obj = {curImg: 0};

    // create tween
    var tween = TweenMax.to(obj, 0.5,
        {
            curImg: images.length - 1,	    // animate propery curImg to number of images
            roundProps: "curImg",			// only integers so it can be used as an array index
            repeat: 3,						// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function (isVersionOK) {
                if (isVersionOK === true) {
                    // for modern browsers
                    $("#myImgsource").attr("type", "image/webp").attr("srcset", imagesWebp[obj.curImg]) // set webp
                    $("#myimg").attr("src", images[obj.curImg]); 
                } else {
                    // for old browsers 
                    $("#myimg").attr("src", images[obj.curImg]);
                }
            }
        }
    );


    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#animated_images", duration: 1000})
                    .setTween(tween)
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
})