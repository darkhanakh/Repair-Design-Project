$(document).ready(function () {
  // TODO  Открытие модального окна
  var heroButton = $(".hero__button");

  var modal = $(".modal"),
    modalButton = $("[data-toggle=modal]"),
    closeModal = $(".modal__close");

  modalButton.on("click", function () {
    modal.addClass("modal--visible");
  });

  closeModal.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  heroButton.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      modal.removeClass("modal--visible");
    }
  });

  $(".modal").on("click", (event) => {
    var target = event.target;
    if (!target.closest(".modal__dialog")) {
      modal.removeClass("modal--visible");
    }
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

      $("html, body").animate(
        {
          scrollTop: top,
        },
        500
      );
    });
  }

  $('a[data-target^="anchor"]').bind("click.smoothscroll", function () {
    var target = $(this).attr("href");
    var blTop = $(target).offset().top;
    $("html, body").animate(
      {
        scrollTop: blTop,
      },
      500
    );
  });

  function smoothScrollScrollDown() {
    $("#js-scroll-down").on("click", function (event) {
      event.preventDefault();
      var scrollDown = $("#js-projects").offset().top;

      $("html, body").animate(
        {
          scrollTop: scrollDown,
        },
        500
      );
    });
  }
  smoothScrollScrollDown();
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
      userPhone: {
        required: true,
        minlength: 11,
      },

      userEmail: {
        required: true,
        email: true,
      },
      policyСheckbox: {
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
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите полный номер телефона",
      },

      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      policyСheckbox: {
        required: "Согласитесь с условиями обработки данных",
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
          alert("Форма отправлена, мы с вами свяжемся в течении 15 минут");
          $(form)[0].reset();
          ym(64338334, "reachGoal", "form");
          return true;
        },
      });
    },
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
      userPhone: {
        required: true,
        minlength: 11,
      },

      userQuestion: {
        required: true,
      },

      policyCheckbox: {
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
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите полный номер телефона",
      },

      userQuestion: {
        required: "Заполните поле",
      },

      policyCheckbox: {
        required: "Согласитесь с условиями обработки данных",
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
          alert("Форма отправлена, мы с вами свяжемся в течении 15 минут");
          $(form)[0].reset();
          ym(64338334, "reachGoal", "form");
          return true;
        },
      });
    },
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
      userPhone: {
        required: true,
        minlength: 11,
      },

      userEmail: {
        required: true,
        email: true,
      },
      policyСheckbox: {
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
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите полный номер телефона",
      },

      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
      policyСheckbox: {
        required: "Согласитесь с условиями обработки данных",
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
          alert("Форма отправлена, мы с вами свяжемся в течении 15 минут");
          $(form)[0].reset();
          modal.removeClass("modal--visible");
          ym(64338334, "reachGoal", "form");
          return true;
        },
      });
    },
  });

  // * Маска для телефона

  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:",
  });

  lazyload();
});
