const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modalMenu = document.getElementById("accessibleModal");
const openHamburgerBtn = document.getElementById("menuButton");
const hamburgerMenu = document.getElementById("menuContent");
const links = document.querySelectorAll(".link");

// 1
function openModal() {
  modalMenu.style.display = "block";
  closeBtn.focus();
}

function closeModal() {
  modalMenu.style.display = "none";
  openBtn.focus();
}

openBtn.addEventListener("click", () => openModal());
closeBtn.addEventListener("click", () => closeModal());

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
});

// 2
function openHamburger() {
  hamburgerMenu.style.display = "flex";
}

function closeHamburger() {
  hamburgerMenu.style.display = "none";
}

openHamburgerBtn.addEventListener("click", () => openHamburger());

links.forEach((link) =>
  link.addEventListener("keydown", (e) => {
    if (e.key == "Enter" || e.key == "Escape") {
      closeHamburger();
    }
  })
);
