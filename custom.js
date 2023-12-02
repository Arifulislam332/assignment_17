// Create botton
const btnOpen = document.querySelector(".open_modal");
const btnClose = document.querySelector(".close_modal");
const modal = document.querySelector(".modal");

// add even listener btnOpen
const modalOpener = () => {
  // modal.style.display = "flex";
  // modal.classList.remove("hidden");
  modal.classList.toggle("hidden");
};

btnOpen.addEventListener("click", modalOpener);

// add even close
const modalOpen = () => {
  // modal.style.display = "none";
  // modal.classList.add("hidden");
  modal.classList.toggle("hidden");
};

btnClose.addEventListener("click", modalOpen);
