let both_dices = document.querySelectorAll(".dice");

function addClickListener() {
  for (let i = 0; i < both_dices.length; i++) {
    both_dices[i].addEventListener("click", function () {
      let random_number = Math.floor(Math.random() * 6 + 1);
      let randomnumber_2 = Math.floor(Math.random() * 6 + 1);
      let random_dice_src = "./img/dice" + random_number + ".png";
      let random_dice_src_2 = "./img/dice" + randomnumber_2 + ".png";
      let image_1 = document
        .querySelectorAll("img")[0]
        .setAttribute("src", random_dice_src);
      let image_2 = document
        .querySelectorAll("img")[1]
        .setAttribute("src", random_dice_src_2);

      if (random_number < randomnumber_2) {
        document.querySelector("h1").innerHTML = "Spiller 2 vinner!";
      } else if (random_number > randomnumber_2) {
        document.querySelector("h1").innerHTML = "Spiller 1 vinner!";
      } else {
        document.querySelector("h1").innerHTML = "Uavgjort!";
      }
    });
  }
}

addClickListener();
