$("#learn-more-btn").click(
    function () {
        $("#learn-more-btn").removeClass("active-color");  //button's color doesn't change on click.
        $(this).addClass("active-color");
    }
)







$('.navbar-collapse a').click(function () {    //Collapse navbar on clicking on link.
    $(".navbar-collapse").collapse('hide');
});

$('.navbar-collapse button').click(function () {    //Collapse navbar on clicking on button.
    $(".navbar-collapse").collapse('hide');
});



function scroller() {
    var elem = document.getElementById("footer-class");
    elem.scrollIntoView();
}


