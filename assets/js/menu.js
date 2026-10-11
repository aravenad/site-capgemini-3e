// Menu burger : ouvre et ferme la navigation sur mobile
const header = document.querySelector(".site-header");
const bouton = document.querySelector(".nav-toggle");

function basculer(ouvert) {
  header.classList.toggle("is-open", ouvert);
  bouton.setAttribute("aria-expanded", ouvert);
}

bouton.addEventListener("click", () => {
  basculer(bouton.getAttribute("aria-expanded") !== "true");
});

// la touche Échap referme le menu et redonne le focus au bouton
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && header.classList.contains("is-open")) {
    basculer(false);
    bouton.focus();
  }
});
