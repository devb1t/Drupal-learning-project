/* eslint-disable */

(function ($, Drupal) {
  Drupal.behaviors.scrollToTop = {
    attach: function (context, settings) {
      // Check if device is mobile phone
      const mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
      if (mobile) {
        return;
      }

      // Create button element in page
      $("body", context).once('scrollToTop').append("<div id=\"scrollToTop\"></div>");

      let elem = $("#scrollToTop");

      // Scroll to top of the page function
      elem.click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 300);
      });

      // Hide / Display button elem
      // Hide elem when user on top of the page
      // Display elem when user not on top of page
      $(document).on("scroll", function() {
        let pos = $(document).scrollTop();

        if (pos <= 400) {
          // Hide elem on page
          elem.css({
            "opacity": 0,
            "transform": "translateY(100px)"
          });
        } else {
          // Display elem on page
          elem.css({
            "opacity": 1,
            "transform": "translateY(0)"
          });
        }
      });
    }
  };
}(jQuery, Drupal));
