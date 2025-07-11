/* ============ app.js ============ */
(function () {
  /* 1. Cache things we really want to toggle  */
  const controls = document.querySelectorAll(".control");
  const sections = document.querySelectorAll(
    "header.container, main > section.container"
  ); // every full-page panel

  /* 2. Navigation clicks */
  controls.forEach((btn) => {
    btn.addEventListener("click", function () {
      /* switch the highlighted nav button */
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");

      /* hide ALL panels, then show the requested one */
      sections.forEach((sec) => sec.classList.remove("active"));
      document.getElementById(this.dataset.id).classList.add("active");
    });
  });

  /* 3. Dark / light toggle */
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
