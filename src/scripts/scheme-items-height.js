function roundNumber(rnum, rlength) { 
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    return newnumber;
}


function resizeHeightOfScheme () {
    $('.scheme-item-to-resize').each(function () { 
        var heightScheme = roundNumber( $(".main-scheme-item").outerHeight(), 1 );
        $(this).height(heightScheme)
        console.log(heightScheme, $(this).height())
    })
}

$('.main-scheme-item').ready(function() { 
        resizeHeightOfScheme()
})


$(window).resize(function() {
        resizeHeightOfScheme()
  });