const lampBulb = document.querySelector(".lamp-img");
console.log(lampBulb);

const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", function () {
  {
    console.log("Ho cliccato");
    console.log(lampBulb.className);
    lampBulb.src = "./img/yellow_lamp.png";
    button.textContent = "Spegni";
  }
});
