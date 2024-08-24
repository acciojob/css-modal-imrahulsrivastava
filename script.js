function toggleModal() {
  const modal = document.querySelector(".modal");
  if (isModalOpen) {
    modal.style.display = "none";
    isModalOpen = false;
  } else {
    modal.style.display = "block";
    isModalOpen = true;
  }
}

const button = document.getElementById("openModal");
let isModalOpen = false;

button.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", toggleModal);

window.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  if (event.target === modal && !modalContent.contains(event.target)) {
    modal.style.display = "none";
    isModalOpen = false;
  }
});
