(function ($, Headroom) {
  var headroom;
  $(function () {
    let header = document.getElementById('site-header').querySelector('.navbar-brand');

    headroom = new Headroom(header, {
      offset: 200,
      tolerance: 5,
    // css classes to apply
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "headroom--pinned",
        // when scrolling down
        unpinned : "headroom--unpinned",
        // when above offset
        top : "headroom--top",
        // when below offset
        notTop : "headroom--not-top"
    }
    });

    headroom.init();
  });
})(jQuery, Headroom);
