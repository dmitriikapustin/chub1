function roundNumber(rnum, rlength) { 
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    return newnumber;
}

// leftRound.getBoundingClientRect()

function resizeRoundedContent () {
    $('.left-round').each(function () { 
        var height = roundNumber( $(this).outerHeight(), 1 );
        $('.right-round').height(height)
        console.log(height)
    })
}

$(document).ready(function() { 
    if ($(window).width() < 800) {
        resizeRoundedContent()
    }
})

$(window).resize(function() {
    if ($(window).width() < 800) {
        resizeRoundedContent()
    }
  });