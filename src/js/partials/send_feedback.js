document.querySelector(`#agreeded`).onclick = function () {
  if (this.checked) {
    document.querySelector(`#contacts`).disabled = false;
  } else {
    document.querySelector(`#contacts`).disabled = true;
  }
};

(function ($) {
  $(`#feedback--2`).submit(function (e) {
    let $form = $(this);
    $.ajax({
      type: `POST`,
      url: `send.php`,
      data: $form.serialize()
    }).done(function () {
      $(`.modal-mask`).addClass(`modal-mask--visible`);
      $(`.modal__header`).text(`Заявка принята`);
      $(`.modal__text`).text(`Спасибо за ваш выбор! Мы свяжемся с вами в ближайшее время`);
      $(`.modal__close`).on(`click`, function () {
        $(`.modal-mask`).removeClass(`modal-mask--visible`);
      });
      addEventListener();
    }).fail(function () {
      $(`.modal-mask`).addClass(`modal-mask--visible`);
      $(`.modal__header`).text(`Что-то пошло не так`);
      $(`.modal__text`).text(`Позвоните или попробуйте отправить письмо позднее`);
      $(`.modal__close`).on(`click`, function () {
        $(`.modal-mask`).removeClass(`modal-mask--visible`);
      });
    });
    // отмена действия по умолчанию для кнопки submit
    e.preventDefault();
  });
})(jQuery);
