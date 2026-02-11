// 1) Select elements
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

// Small helpers (cleaner code)
function openModal() {
  modal.classList.add("modal--open");
  document.body.style.overflow = "hidden"; // bonus: prevent background scroll
}

function closeModal() {
  modal.classList.remove("modal--open");
  document.body.style.overflow = ""; // restore scroll
}

// 2) Open modal
openButton.addEventListener("click", () => {
  openModal();
});

// 3) Close modal (button)
closeButton.addEventListener("click", () => {
  closeModal();
});

// 4) Close modal when clicking outside the content (overlay)
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// 5) Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("modal--open")) {
    closeModal();
  }
});
