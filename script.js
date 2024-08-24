function toggleModal() {
  const modal = document.querySelector(".modal");
  if (isModalOpen) {
    modal.style.display = "none";
    isModalOpen = false;
  } else {
    modal.style.display = "block"; // Changed from "flex" to "block"
    isModalOpen = true;
  }
}

const button = document.getElementById("openModal");
let isModalOpen = false;

button.addEventListener("click", toggleModal);

// Close modal when the close button is clicked
const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", toggleModal);

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  if (event.target === modal && !modalContent.contains(event.target)) {
    modal.style.display = "none";
    isModalOpen = false;
  }
});
