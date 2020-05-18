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
});