document.addEventListener("DOMContentLoaded", function (event) {
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
});