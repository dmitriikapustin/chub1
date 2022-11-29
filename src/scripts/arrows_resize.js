function roundNumber(rnum, rlength) { 
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    return newnumber;
}

function resizeButtonArrows() {
    $('.button').each(function () {
        var height = roundNumber( $(this).find('a').outerHeight(), 1 )
        $(this).find('.circle-arrow img').height(height).width(height);
        $(this).find('.circle-arrow').height(height).width(height);
        $(this).find('.arrow-right img').height(height).width(height);
        $(this).find('.arrow-right').height(height).width(height);
        console.log(roundNumber(height, 1))
    })
}

$(document).ready(function(){ resizeButtonArrows() })
$(window).on('resize', function(){ resizeButtonArrows() });