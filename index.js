"use strict";

const modal = document.getElementById("modal");

modal.addEventListener("submit", function (e) {
  e.preventDefault();

  modal.classList.add("img-only");
  modal.innerHTML = "";
  modal.innerHTML = `
  <div class="img">
    <img src="fade-stagger-circles.svg" alt="loading" width="120px">
    <div>
    <h2>Hold up, just selling your data</h2>
    </div>
  </div>
`;

  setTimeout(function () {
    modal.innerHTML = `<div class="img">
    <img src="fade-stagger-circles.svg" alt="loading" width="120px">
    <div>
    <h2>Making the sale</h2>
    </div>
  </div>`;
  }, 3500);

  setTimeout(function () {
    modal.innerHTML = `<div class="img">
    <img src="fade-stagger-circles.svg" alt="loading" width="120px">
    <div>
    <h2>Just Showing off some cookies skills, you may close the site</h2>
    </div>
  </div>`;
  }, 7000);
});



