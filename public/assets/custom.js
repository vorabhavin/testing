/*global jQuery: true 
global $: true 
*/
jQuery(document).ready(function() {
  // Close external popup on click of overlay.
 jQuery(document).on('mouseup', function(event) {
    var $target = jQuery(event.target);
    if (!$target.closest('#external-link-modal .modal-dialog').length &&
      jQuery('#external-link-modal .modal-dialog').is(":visible")) {
      externalLink.destroyModal();
    }
  });
   jQuery("#isi").removeClass("is-static");
  jQuery(".isi-headline").removeClass("is-fade");
 if(window.navigator.appVersion.indexOf("MSIE")>0){
        jQuery("#isi").next().css("display","none");
    }

    if ( window.location.pathname === "/" || window.location.pathname === "/index.html"){
    // Index (home) page
    jQuery("body").addClass(" html front not-logged-in no-sidebars node-type-basic-page");

} 
    //console.log("hello");
   // jQuery("link[href*="https://pkg-cdn.digitalpfizer.com/helix-web-components/0.10.0/helix/helix.css"]").remove();
   //if(window.navigator.appVersion.indexOf("MSIE")<0){
    //jQuery("#header").children().each(function(i,element) {
      //  jQuery(element)[0].outerHTML = "\n" + jQuery(element)[0].outerHTML  + "\n";
      // })
    //jQuery("#footer1").children().each(function(i,element) {
      //  jQuery(element)[0].outerHTML = "\n" + jQuery(element)[0].outerHTML  + "\n";
      // })
  // }   
        	
  //code for covid-19 banner	
    if(jQuery("body").hasClass("front")) {	
        
        //jQuery	
        function layoutCheck() {	
            var paddingTop = jQuery("#covidbanner-wrapper").outerHeight() + "px";	
            jQuery("body").css("padding-top",paddingTop);	
            //Sticky code need to be change.	
            //jQuery('#block-menu-menu-top-menu').css('top',paddingTop);	
            // jQuery('#covidbanner').addClass('stick');	
            //window.scrollTo(0,0)	
        }	
        layoutCheck();	
        jQuery(window).resize(layoutCheck);	
    }	
    	

    // Detect Internet Explorer.
    let iePattern = /(?:\b(ms)?ie\s+|\btrident\/7\.0;.*\s+rv:)(\d+)/;
    let isIe = navigator.userAgent.toLowerCase().match(iePattern) ? true : false;
    const $isiSection = jQuery("#isi");
    // function isDisabledScroll() {
    //   const $isiSection = jQuery("#isi");
    //   const openCLass = "open";
    //   const noScrollClass = "no-scroll";
  
    //   if ($isiSection.hasClass(openCLass)) {
    //     // Disable scroll when mobileMenu/isiSection is opened.
    //     jQuery("body").addClass(noScrollClass);
    //     document.ontouchmove = function (e) {
    //       e.preventDefault();
    //     };
    //   }
    //   else {
    //     // Enable scroll when mobileMenu/isiSection is closed.
    //     jQuery("body").removeClass(noScrollClass);
    //     document.ontouchmove = function () {
    //       return true;
    //     };
    //   }
    // }
  
  
        const desktopBreakpoint = 1024;
        const $headline = jQuery(".isi-headline", $isiSection);
        const isiDesktopSpacing = 5;
        const isiSpacing = 100;
        const openClass = "open";
        //const $headerBlock = jQuery("header", context);
        const isiDefaultHeight = "27%";
        const $isiContentContainer = jQuery(".isi-main-content-container", $isiSection);
        const isiContentBottomSpacing = 30;
        const isiMaxOpenHeight = 0.9;
        const $mainContainer = jQuery("#main-content");
        const $isiAnchorLink = jQuery(".isi-anchor-link");
        const anchorSpeed = 1000;
        const isiAnchor = "#isi-section";
        const staticClass = "is-static";
        const fadeClass = "is-fade";
        let mainPageContainerHeight = $mainContainer.outerHeight();
        let dynamicIsiHeight = 0;
        let headerHeight = 0;
        let windowWidth = 0;
        let windowHeight = 0;
        let maxPageVisibleZone = window.innerHeight * 0.7;
  
        // Next bit needed to fix "jumping" page in IE.
        // if (isIe) {
        //   $isiSection.clone().insertAfter($isiSection).addClass(staticClass);
        //   var $ieFix = $isiSection.next();
        //   $ieFix.css("height", $ieFix.outerHeight() + "px").removeAttr("id").removeAttr("class").html("");
        // }
  
        // Add static class for ISI on small pages.
        if (mainPageContainerHeight < maxPageVisibleZone) {
          $isiSection.addClass(staticClass);
        }
  
        // Set max height for open ISI block.
        // Fire on window resize.
        jQuery(window).on("resize", function () {
          if ($isiSection.hasClass(openClass)) {
            isDisabledScroll();
            $isiSection.css({
              "max-height": window.innerHeight * isiMaxOpenHeight
            });
          }
        });
  
        // Anchor isi link.
        $isiAnchorLink.attr("href", isiAnchor);
        $isiAnchorLink.on("click", function (e) {
          e.preventDefault();
          let $mainContent = jQuery("#main-content");
          let $mainContentheight = $mainContent.outerHeight();
          let $covidBlock = $("#block-covidbanner").outerHeight()*2;
          // Close mobile menu.
          //jQuery("html, body").animate({
            //scrollTop: $mainContent.offset().top + $mainContentheight - $covidBlock
          //}, anchorSpeed);
        });
  
        
   // End of Floodlight Tag: Please do not remove 
  
  ;/*})'"*/
  ;/*})'"*/
    });
jQuery(".message__info").click(function(){
if (window.navigator.appVersion.indexOf("MSIE") > 0) {
   jQuery("#external-link-modal .modal-body").css("max-width","750px");
  }
});
