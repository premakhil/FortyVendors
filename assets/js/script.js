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
    var elem = document.getElementById("footer-class");         //contact-button-scrolling
    elem.scrollIntoView();
}




mybutton = document.getElementById("movetop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {      //scroll-top button
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;                                      // For Safari
    document.documentElement.scrollTop = 0;                          // For Chrome, Firefox, IE and Opera
}


