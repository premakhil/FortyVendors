$("#learn-more-btn").click(
    function () {
        $("#learn-more-btn").removeClass("active-color");
        $(this).addClass("active-color");
    }
)






$(function () {
    new WOW().init();       // Initiate the wowjs
});

$('.navbar-collapse a').click(function () {    //Collapse navbar on click 
    $(".navbar-collapse").collapse('hide');
});