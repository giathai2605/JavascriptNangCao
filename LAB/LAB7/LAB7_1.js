class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`The new speed of the ${this.make} car is ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`The new speed of the ${this.make} car is ${this.speed} km/h`);
    }
}

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate(); // The new speed of the BMW car is 130 km/h
car1.accelerate(); // The new speed of the BMW car is 140 km/h
car1.brake(); // The new speed of the BMW car is 135 km/h

car2.accelerate(); // The new speed of the Mercedes car is 105 km/h
car2.brake(); // The new speed of the Mercedes car is 100 km/h
