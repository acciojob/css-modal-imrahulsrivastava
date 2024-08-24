function toggleModal() {
  const modal = document.querySelector(".modal");
  if (isModalOpen) {
    modal.style.visibility = "none";
    isModalOpen = false;
  } else {
    modal.style.visibility = "flex";
    isModalOpen = true;
  }
}

let isModalOpen = false;

const openButton = document.getElementById("openModal");
openButton.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", toggleModal);
