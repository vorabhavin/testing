$(document).ready(function () {
  // this waits until the document is fully loaded
  $(".vjs-big-play-button").click(function () {
    $(".video-overlay").toggle();
  });
});

$(document).ready(function () {
  const _header = $("header");
  let _fixed = false;

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      if (_fixed == false) {
        _header.addClass("fixed");
        _fixed = true;
        console.log("fixed");
      }
    } else {
      if (_fixed == true) {
        _header.removeClass("fixed");
        _fixed = false;
        console.log("remove fixed");
      }
    }
  });
});
