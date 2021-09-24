const modalBack = document.querySelector(".modal__opacity");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelectorAll("#modalBtn");

function closeModal() {
  modal.classList.add("hidden");
  modalBack.classList.add("hidden");
}

modalBtn[0].addEventListener("click", closeModal);
modalBtn[1].addEventListener("click", closeModal);
modalBack.addEventListener("click", closeModal);
