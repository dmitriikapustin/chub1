$(document).ready(function () { 

    var lightning = document.getElementById("lightning")


    var tl_hover_lightning = new TimelineLite({paused:true})
    tl_hover_lightning.to(".project-6-hover-image", {top: '1.6%', left: '-0.8%', duration: 0.06})
    tl_hover_lightning.to(".project-6-hover-image", {top: '3.9%', left: '-5%', duration: 0.06})

    $(".project-6").on('mouseover', function(){
        tl_hover_lightning.play(0);
    })
})