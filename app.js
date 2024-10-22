const lampBulb = document.querySelector(".lamp-img");
console.log(lampBulb);

const button = document.querySelector(".btn");
console.log(button);

const backGround = document.querySelector(".bg-dark");
console.log(backGround);

button.addEventListener("click", function () {
  {
    if (lampBulb.className.includes("bulb-off")) {
      // console.log("Ho cliccato");
      // console.log(lampBulb.className);
      lampBulb.src = "./img/yellow_lamp.png";
      lampBulb.classList.toggle("bulb-off");
      backGround.classList.toggle("bg-dark");
      // backGround.classList.remove("bg-dark");
      // background.classList.add("bg-dark-light");

      button.textContent = "Spegni";
    } else {
      lampBulb.src = "./img/white_lamp.png";
      lampBulb.classList.toggle("bulb-off");
      backGround.classList.toggle("bg-dark");

      button.textContent = "Accendi";
    }
  }
});
