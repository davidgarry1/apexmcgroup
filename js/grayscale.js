/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */





// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(window).load(function() {
        // Animate loader off screen
        $("body").removeClass("preload");
        $(".se-pre-con").fadeOut("fast");
    });
// Closes the Responsive Menu on Menu Item Click


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.navbar-collapse ul li a').click(
    function() {
        $(this).closest('.collapse').collapse('toggle');
    }
);


var status = "less";
  document.getElementById("textArea").style.display="none";
function toggleText()
{
    if (status == "less") {
        document.getElementById("textArea").style.display="block";
        document.getElementById("toggleButton").innerText = "Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").style.display="none";
        document.getElementById("toggleButton").innerText = "More";
        status = "less"
    }
}



var status2 = "less";
  document.getElementById("textArea2").style.display="none";
function toggleText2()
{
    if (status2 == "less") {
        document.getElementById("textArea2").style.display="block";
        document.getElementById("toggleButton2").innerText = "Less";
        status2 = "more";
    } else if (status2 == "more") {
        document.getElementById("textArea2").style.display="none";
        document.getElementById("toggleButton2").innerText = "More";
        status2 = "less"
    }
}

var status3 = "less";
  document.getElementById("textArea3").style.display="none";
function toggleText3()
{
    if (status3 == "less") {
        document.getElementById("textArea3").style.display="block";
        document.getElementById("toggleButton3").innerText = "Less";
        status3 = "more";
    } else if (status3 == "more") {
        document.getElementById("textArea3").style.display="none";
        document.getElementById("toggleButton3").innerText = "More";
        status3 = "less"
    }
}
