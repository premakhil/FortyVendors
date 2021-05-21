$("#learn-more-btn").click(
    function () {
        $("#learn-more-btn").removeClass("active-color");  //button's color doesn't change on click.
        $(this).addClass("active-color");
    }
)






$(function () {
    new WOW().init();       // Initiate the wowjs.
});

$('.navbar-collapse a').click(function () {    //Collapse navbar on click.
    $(".navbar-collapse").collapse('hide');
});



