/* document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelectorAll('[data-toggle=modal]');
  const closeModal = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalButton.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeModal.addEventListener('click', switchModal);
}); */

$(document).ready(function () {
  var modal = $(".modal"),
    modalButton = $("[data-toggle=modal]"),
    closeModal = $(".modal__close");

  modalButton.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  closeModal.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 10 + bullets.width() + 10);
  bullets.css("left", prev.width() + 10);

  function smoothScroolHome() {
    $("#js-arrow").on("click", function (event) {
      event.preventDefault();
      var top = $("#js-hero").offset().top;

      $("html, body").animate({
          scrollTop: top,
        },
        500
      );
    });
  }
  smoothScroolHome();

  new WOW().init();

  // TODO Валидация формы

  $(".modal__form").validate({
    // * Имя класса для ошибки
    errorClass: "invalid",
    // * Правило для форм
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",

      userEmail: {
        required: true,
        email: true,
      },
    },

    //* Сообщение которое будет выводится
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв",
      },
      userPhone: "Заполните поле",

      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },

    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "email.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Форма отправлена, мы с вами свяжемся в течении 15 минут');
          $(form)[0].reset();
          modal.removeClass("modal--visible");
          console.log("Ajax сработал, ответ сервера: " + response);
        }
      });
    }
  });

  // * Маска для телефона

  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "7(___)___-__-__"
  });
});