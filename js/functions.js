function makeSameHeight() {
    var maxHeight = 0;

    $(".sh1").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });

    $(".sh1").height(maxHeight);
}

//===========================================================================
//---------------------resize------------------------------------------------
//===========================================================================
$(window).on("resize", function () {
    makeSameHeight();
});


//===========================================================================
//---------------------End resize--------------------------------------------
//===========================================================================

//===========================================================================
//---------------------document ready----------------------------------------
//===========================================================================
$(document).ready(function () {
    makeSameHeight();

});

// =======================================

// // =======================================
// // Basice Code keep it
$(document).ready(function () {
    
});
//===========================================================================
//---------------------end document ready------------------------------------
//===========================================================================


$(window).on('load', function () {

    "use strict";

    // Loading Elements

    $(".contain-loader").fadeOut(2000, function () {

        // Show The Scroll
        $("body").css("overflow", "hidden");

        $(this).fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).remove();
        });

    });


});


// // =======================================


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.scroll-sec').each(function () {
        var currLink = $(this);
        // console.log(currLink);
        var refElement = $(currLink.attr('href'));

        if (refElement.position().top -300 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.scroll-sec').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


// // Basice Code keep it
$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

