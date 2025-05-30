document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links li a");
  const main = document.querySelector("main");

  if (!main) return;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      const url = this.href;

      // Nur interne Links (optional)
      if (url.startsWith(window.location.origin) || url.startsWith(".")) {
        event.preventDefault();

        // "fade-in"-Klasse ggf. entfernen, damit sie fade-out nicht stört
        main.classList.remove("fade-in");

        // Fade-out starten
        main.classList.add("fade-out");

        // Nach Animation navigieren
        setTimeout(() => {
          window.location.href = url;
        }, 500); // muss zur transition passen
      }
    });
  });
});
