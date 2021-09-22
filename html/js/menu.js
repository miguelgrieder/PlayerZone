const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});


window.addEventListener(
  "resize", () => {
    if (document.body.clientWidth > 720) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);

$("*").each( function () {
  var $this = $(this);
  if (parseInt($this.css("fontSize")) < 200) {
      $this.css({ "font-size": "12px" });   
  }
});

function vermais_jogo() {
  window.location.href = "./vermais_jogo.html";
};
function vermais_usuario() {
  window.location.href = "./vermais_usuario.html";
};

function vermais_novidade() {
  window.location.href = "./vermais_novidade.html";
};

