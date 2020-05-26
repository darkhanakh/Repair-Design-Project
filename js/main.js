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
  // TODO  Открытие модального окна
  var modal = $(".modal"),
    modalButton = $("[data-toggle=modal]"),
    closeModal = $(".modal__close");

  modalButton.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  closeModal.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  // TODO Слайдер
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

  // TODO Плавная прокрутка
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

  $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    var target = $(this).attr('href');
    var blTop = $(target).offset().top;
    $("html, body").animate({
        scrollTop: blTop,
      },
      500
    );
  });


  smoothScroolHome();

  new WOW().init();

  // TODO Валидация формы

  $(".control__form").validate({
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

    //* Ajax
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "email.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Ajax сработал, ответ сервера: " + response);
          alert('Форма отправлена, мы с вами свяжемся в течении 15 минут');
          $(form)[0].reset();
          ym(64338334, 'reachGoal', 'form');
          return true;
        }
      });
    }
  });

  $(".footer__form").validate({
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

      userQuestion: {
        required: true,
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

      userQuestion: {
        required: "Заполните поле",
      },
    },

    //* Ajax
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "email.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Ajax сработал, ответ сервера: " + response);
          alert('Форма отправлена, мы с вами свяжемся в течении 15 минут');
          $(form)[0].reset();
          ym(64338334, 'reachGoal', 'form');
          return true;
        }
      });
    }
  });

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


    //* Ajax
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "email.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Ajax сработал, ответ сервера: " + response);
          alert('Форма отправлена, мы с вами свяжемся в течении 15 минут');
          $(form)[0].reset();
          modal.removeClass("modal--visible");
          ym(64338334, 'reachGoal', 'form');
          return true;
        }
      });
    }
  });

  // * Маска для телефона

  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "7(___)___-__-__"
  });
});