(function($) {

 function init() {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.main').toggleClass('active');
      });
  };
  // run init on document ready
  $(document).ready(init);

})(jQuery);
