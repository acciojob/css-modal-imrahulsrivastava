function toggleModal() {
  const modal = document.querySelector(".modal");
  if (isModalOpen) {
    modal.style.display = "none";
    isModalOpen = false;
  } else {
    modal.style.display = "flex";
    isModalOpen = true;
  }
}

let isModalOpen = false;

const openButton = document.getElementById("openModal");
openButton.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", toggleModal);
