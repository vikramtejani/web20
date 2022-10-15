class automobile {
  constructor(name, model, color, type) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.type = type;
  }
}
function changecolor(car, newColor) {
  car.color = newColor;
}
let car1 = new automobile("CivicRsturbo", "2000", "black", "Civic");
let car2 = new automobile("Suzki", "2005", "pink", "Mehran");
let car3 = new automobile("Tesla", "2010", "white", "Tesla");

changecolor(car1, "blue");

console.log(car1.name, car1.model, car1.color, car1.type);
console.log(car2.name, car2.model, car2.color, car2.type);
console.log(car3.name, car3.model, car3.color, car3.type);
