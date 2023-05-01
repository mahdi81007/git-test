let value = document.querySelector(".value");
let btns = document.querySelectorAll(".btns button");

let number = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnContent = e.target;
    if (btnContent.classList.contains("increas")) {
      number++;
    } else if (btnContent.classList.contains("decrease")) {
      number--;
    } else {
      number = 0;
    }
    value.textContent = number;
  });
});
