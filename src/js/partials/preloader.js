(function ($) {
  $(document).ready(function () {
    $(`.loader-wrapper`).find(`.loader`).fadeOut();
    $(`.loader-wrapper`).delay(300).fadeOut(`slow`);
    $(`html`).removeClass(`no-scroll`);
  });
})(jQuery);
