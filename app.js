const lampBulb = document.querySelector(".lamp-img");
console.log(lampBulb);

const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", function () {
  {
    if (lampBulb.className.includes("bulb-off")) {
      // console.log("Ho cliccato");
      // console.log(lampBulb.className);
      lampBulb.src = "./img/yellow_lamp.png";
      lampBulb.classList.toggle("bulb-off");
      button.textContent = "Spegni";
    } else {
      lampBulb.src = "./img/white_lamp.png";
      lampBulb.classList.toggle("bulb-off");
      button.textContent = "Accendi";
    }
  }
});
