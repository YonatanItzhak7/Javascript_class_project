class Cars {
  constructor(wheels, engineCapacity, carColor) {
    this.wheels = wheels;
    this.engineCapacity = engineCapacity;
    this.carColor = carColor;
  }
  carDetails() {
    return `Car wheels:${this.wheels} Car Engine Capacity:${this.wheels} Car Color:${this.carColor} `;
  }
}
class Suv extends Cars {
  constructor(wheels, engineCapacity, carColor, carName) {
    super(wheels, engineCapacity, carColor);
    this.carName = carName;
  }
  getParentCarName(carName) {
    return super.carDetails()`Car Name:${this.carName}`;
  }

  changeToUpperCase() {
    return (this.carName =
      this.carName.charAt(0).toUpperCase() +
      this.carName.slice(1, this.carName.length - 1) +
      this.carName.charAt(this.carName.length - 1).toUpperCase());
  }
  get secret() {
    return this.changeToUpperCase();
  }
}
// const car1 = new Suv(4, "2000Cc", "Red", "Mazda").secret;
// console.log(car1);

class Motorcycle extends Cars {
  constructor(wheels, engineCapacity, carColor, carName) {
    super(wheels, engineCapacity, carColor);
    this.carName = carName;
  }
  getParentCarName() {
    return super.carDetails()`Car Name:${this.carName}`;
  }
}

class Sport extends Cars {
  constructor(wheels, engineCapacity, carColor, carName) {
    super(wheels, engineCapacity, carColor);
    this.carName = carName;
  }
  getParentCarName() {
    return super.carDetails()`Car Name:${this.carName}`;
  }
}
const car1 = new Suv(4,"2000Cc","Red","Hundai")
const car2 = new Motorcycle(2,"1000Cc","Red","Suzuki")
const car3 = new Sport(4,"6000Cc","Yellow","Lamborghini")
console.log(car1,car2,car3);

let myObjCarArray = [car1,car2,car3]
myObjCarArray.forEach(item =>{
  for(const key in item){
    
  }
})
