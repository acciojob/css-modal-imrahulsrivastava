window.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  if (event.target === modal && !modalContent.contains(event.target)) {
    modal.style.display = "none";
    isModalOpen = false;
  }
});

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

let isModalOpen = false;

const openButton = document.getElementById("openModal");
openButton.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", toggleModal);
