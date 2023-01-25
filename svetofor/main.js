class TrafficLight {
  constructor() {
    this.redLight = document.getElementById("red");
    this.yellowLight = document.getElementById("yellow");
    this.greenLight = document.getElementById("green");
  }

  changeLight(color) {
    this.redLight.style.background = "white";
    this.yellowLight.style.background = "white";
    this.greenLight.style.background = "white";

    if (color === "red") {
      this.redLight.style.background = "red";
    } else if (color === "yellow") {
      this.yellowLight.style.background = "yellow";
    } else if (color === "green") {
      this.greenLight.style.background = "green";
    }
  }
}

const light = new TrafficLight();

const color = prompt("Выберите цвет светофора: red, yellow, green");
light.changeLight(color);



