/* global $, JQuery, alert*/

$(document).ready(function () {
   $('.carousel').carousel({
      interval:5000
   });
    // show color option div when click on the gear

    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // change theme color on click

      var colorLi =$(".color-option ul li");
      colorLi
        .eq(0).css("backgroundColor","#13fd06").end()
        .eq(1).css("backgroundColor","#f70ac7").end()
        .eq(2).css("backgroundColor","#f70408").end()
        .eq(3).css("backgroundColor","#fbfb07").end()
        .eq(4).css("backgroundColor","#9f91e8");

      colorLi.click(function () {
         $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      });

});
// loading screen

// loading screen

// caching the scroll top element

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }











