/**
 * @file
 *
 * Mais ISI logic.
 *
 * Fixed position.
 * Scroll inside block.
 * Sticky/unsticky position.
 *
 */

(function ($, EdisonLite, Waypoint) {
  "use strict";

  // Detect Internet Explorer.
  let iePattern = /(?:\b(ms)?ie\s+|\btrident\/7\.0;.*\s+rv:)(\d+)/;
  let isIe = navigator.userAgent.toLowerCase().match(iePattern) ? true : false;

  function isDisabledScroll() {
    const $isiSection = $('#isi');
    const openCLass = 'open';
    const noScrollClass = 'no-scroll';

    if ($isiSection.hasClass(openCLass)) {
      // Disable scroll when mobileMenu/isiSection is opened.
      $('body').addClass(noScrollClass);
      document.ontouchmove = function (e) {
        e.preventDefault();
      };
    }
    else {
      // Enable scroll when mobileMenu/isiSection is closed.
      $('body').removeClass(noScrollClass);
      document.ontouchmove = function () {
        return true;
      };
    }
  }

  /**
   * Main ISI logic.
   * @type {{attach: attach}}
   */
  EdisonLite.behaviors.isiBlock = {
    attach: function (context) {
      const $isiSection = $('#isi', context);
      // Skip ISI block handler, if missed in context.
      if (!$isiSection.length) {
        return;
      }

      const desktopBreakpoint = 1024;
      const $headline = $('.isi-headline', $isiSection);
      const isiDesktopSpacing = 5;
      const isiSpacing = 100;
      const openClass = 'open';
      const $headerBlock = $('header', context);
      const isiDefaultHeight = '27%';
      const $isiContentContainer = $('.isi-main-content-container', $isiSection);
      const isiContentBottomSpacing = 30;
      const isiMaxOpenHeight = 0.9;
      const $mainContainer = $('#main-content');
      const $isiAnchorLink = $('.isi-anchor-link');
      const anchorSpeed = 1000;
      const isiAnchor = '#isi-section';
      const staticClass = 'is-static';
      const fadeClass = 'is-fade';
      let mainPageContainerHeight = $mainContainer.outerHeight();
      let dynamicIsiHeight = 0;
      let headerHeight = 0;
      let windowWidth = 0;
      let windowHeight = 0;
      let maxPageVisibleZone = window.innerHeight * 0.7;

      // Next bit needed to fix 'jumping' page in IE.
      if (isIe) {
        $isiSection.clone().insertAfter($isiSection).addClass(staticClass);
        var $ieFix = $isiSection.next();
        $ieFix.css('height', $ieFix.outerHeight() + 'px').removeAttr('id').removeAttr('class').html('');
      }

      // Add static class for ISI on small pages.
      if (mainPageContainerHeight < maxPageVisibleZone) {
        $isiSection.addClass(staticClass);
      }

      // Set max height for open ISI block.
      // Fire on window resize.
      $(window).on('resize', function () {
        if ($isiSection.hasClass(openClass)) {
          isDisabledScroll();
          $isiSection.css({
            'max-height': window.innerHeight * isiMaxOpenHeight
          });
        }
      });

      // Anchor isi link.
      $isiAnchorLink.attr('href', isiAnchor);
      $isiAnchorLink.on('click', function (e) {
        e.preventDefault();
        let $mainContent = $('#main-content', context);
        let $mainContentheight = $mainContent.outerHeight();
        let $covidBlock = $("#block-covidbanner").outerHeight()*2;
        // Close mobile menu.
        $('html, body').animate({
          scrollTop: $mainContent.offset().top + $mainContentheight - $covidBlock
        }, anchorSpeed);
      });

      // Refresh waypoint and detect desktop devices.
      // We need to add $(window).load event for calculate waypoint values
      // when all content on page will be loaded (images, dynamic blocks, custom DIM elements).
      $(window).on('load resize', function () {
        Waypoint.refreshAll();
      });

      // Anchor isi link.
      // Static and fixed position for ISI on scroll.
      EdisonLite.waypoint = new Waypoint({
        element: $mainContainer,
        handler: function (direction) {
          // If scroll down.
          if (direction === 'down') {
            $isiSection.addClass(staticClass);
            // Remove open class, because open and static class has conflict.
            // Clear style, remove static height.
            $isiSection.removeAttr('style');
            $isiSection.removeClass(openClass);
            $isiContentContainer.css({
              'height': 'auto'
            });
            $headline.addClass(fadeClass);
            if (isIe) {
              $ieFix.hide();
            }
          }
          else {
            $isiSection.removeClass(staticClass);
            $headline.removeClass(fadeClass);
            if (isIe) {
              $ieFix.show();
            }
          }
        },
        offset: function () {
          return this.context.innerHeight() - this.adapter.outerHeight() - (window.innerHeight * 0.2);
        }
      });
      // Open isi logic section.
      $headline.on('click touchstart touch', function (e) {
        e.preventDefault();
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        // Close mobile menu.
        // Calculate height for not sticky header menu.
        headerHeight = $headerBlock.innerHeight();
        // Open ISI block.
        if (!$isiSection.hasClass(openClass)) {
        //  $headline.data('text-more', $headline.text()).text($headline.data('text-less'));
          $isiSection.toggleClass(openClass);
          $headline.toggleClass(openClass);
          // Set dynamic height for ISI regarding window width.
          if (windowWidth < desktopBreakpoint) {
            dynamicIsiHeight = windowHeight - (headerHeight + isiSpacing);
          }
          else {
            dynamicIsiHeight = windowHeight - headerHeight - isiDesktopSpacing;
          }
          // Set height for isi content and implement CustomScroll.
          $isiSection.height(dynamicIsiHeight);
          $isiContentContainer.height(dynamicIsiHeight - isiContentBottomSpacing);
          $isiContentContainer.niceScroll({
            cursorcolor: "#6f7bf5",
            cursorwidth: "8",
            cursorfixedheight: '32',
            background: '#1e1f71',
            cursorborder: "0px solid #fff",
            cursorborderradius: 100,
            autohidemode: false,
            railoffset: {
              left: -5
            }
          });
        }
        else {
          // Close ISI.
          $headline.text($headline.data('text-more'));
          $isiSection.toggleClass(openClass);
          $headline.toggleClass(openClass);
          $isiSection.css({
            'height': isiDefaultHeight
          });
          // Scroll to top when user close isi block.
          $isiContentContainer.animate({
            scrollTop: 0
          }, 0);
          // Remove custom scroll bar when ISI close.
          $isiContentContainer.niceScroll().remove();
          $isiContentContainer.css({
            'overflow': 'visible',
            'height': 'auto'
          });
        }
        isDisabledScroll();
      });
    }
  };

})(jQuery, EdisonLite, Waypoint);

;/*})'"*/
;/*})'"*/
/**
 * @file
 *
 * Daurismo popup message logic.
 *
 * Show different massage in popup.
 * If link have specific class, show specific message.
 * If no specific class show default message.
 * Hide/show use scss in file _pop-up.scss
 *
 */

(function($, EdisonLite) {

  "use strict";

  // Set specific class here.
  EdisonLite.settings.extLinkMapping = {
    'info': 'message__info'
  };

  $(document).ready(function() {

    var $bodyGlobal = $('body');

    // Help function.
    // Remove class from body.
    function bodyRemoveClass() {
      $.each(EdisonLite.settings.extLinkMapping, function(string, active) {
        $('body').removeClass(active);
      });
    }

    // Help event.
    // For add class to show message in popup.
    $('.extlink').on('click touchdown', function() {
      var $linkActive = $(this).attr('class');
      $.each(EdisonLite.settings.extLinkMapping, function(string, active) {
        if (~$linkActive.indexOf(string)) {
          $bodyGlobal.addClass(active);
        }
      });
    });

    // Remove class after close popup.
    $('#colorbox').on('click', '.close-pop-up, #cboxClose', function() {
      setTimeout(function() {
        bodyRemoveClass();
      }, 500);
    });

    // For Covid Banner
    $(window).scroll(sticktothetop);
    sticktothetop();

    function sticktothetop() {
      var window_top = $(window).scrollTop();
      var top = $('header').offset().top;
      if (window_top > top) {
        $('#block-covidbanner').addClass('stick');
      } else {
        $('#block-covidbanner').removeClass('stick');
      }
    }

  });


})(jQuery, EdisonLite);

;/*})'"*/
;/*})'"*/
