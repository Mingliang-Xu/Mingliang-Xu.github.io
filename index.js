const details = document.querySelectorAll(".details");
const background = document.querySelector(".background");
// const closeBtn = document.querySelector(".close-btn");
const navigationTag = document.querySelectorAll(".nav-tag");

console.log(navigationTag);

function closeDetails(i) {
  document.getElementById(i).classList.add("hidden");
  background.classList.add("hidden");
}
function openDetails(i) {
  document.getElementById(i).classList.remove("hidden");
  background.classList.remove("hidden");
}

for (let i = 0; i < navigationTag.length; i++) {
  navigationTag[i].addEventListener("click", () => {
    openDetails(i);
  });
  document.querySelector(`.close-btn-${i}`).addEventListener("click", () => {
    closeDetails(i);
  });
}

// closeBtn.addEventListener("click", closeDetails);
background.addEventListener("click", () => {
  closeDetails("0");
  closeDetails("1");
  closeDetails("2");
  closeDetails("3");
  closeDetails("4");
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  for (let i = 0; i < details.length; i++) {
    if (event.key === `Escape` && !details[i].classList.contains("hidden")) {
      closeDetails(i);
    }
  }
});
