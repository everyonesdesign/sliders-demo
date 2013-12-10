//General

$(document).ready(function() {
   $(".effect-tag").click(function(e) {
       e.preventDefault();
       $(this).addClass("active").siblings().removeClass("active");
       if ($(this).closest(".nivo-slider-container").length) {
           $("#nivoSlider").children("img").attr("data-transition", $(this).text());
       }
   });
});

$(window).load(function() {
    $(".slider-container").animate({opacity: 1}, 200);
});

//Nivo slider
$(window).load(function() {
    $('#nivoSlider').nivoSlider({
        effect:"sliceDown,sliceDownLeft,sliceUp,sliceUpLeft,sliceUpDown,sliceUpDownLeft,fold,fade,slideInRight,slideInLeft",
        slices:15,
        boxCols:8,
        boxRows:4,
        animSpeed:500,
        pauseTime:3000,
        startSlide:0,
        directionNav:true,
        controlNav:true,
        controlNavThumbs:false,
        pauseOnHover:true,
        manualAdvance:false
    });
});
