class Car {
    constructor(make, speedKmh = 0) {
        this._make = make;
        this._speedKmh = speedKmh;
    }

    get make() {
        return this._make;
    }

    get speedKmh() {
        return this._speedKmh;
    }

    set speedKmh(value) {
        this._speedKmh = value;
    }

    accelerate(amount) {
        this._speedKmh += amount;
    }

    brake(amount) {
        this._speedKmh -= amount;
        if (this._speedKmh < 0) {
            this._speedKmh = 0;
        }
    }
}

class ElectricCar extends Car {
    constructor(make, speedKmh, charge) {
        super(make, speedKmh);
        this._charge = charge;
    }

    get charge() {
        return this._charge;
    }

    set charge(value) {
        this._charge = value;
    }

    chargeBattery(chargeTo) {
        this._charge = chargeTo;
    }

    accelerate(amount) {
        super.accelerate(amount);
        this._charge -= 1;
        console.log(`${this._make} going at ${this._speedKmh} km/h, with a charge of ${this._charge}%`);
    }
}

const tesla = new ElectricCar('Tesla', 120, 90);
console.log(`VEHICLE DATA 1: Car '${tesla.make}' is traveling at ${tesla.speedKmh} km/h, has a battery level of ${tesla.charge}%`);
tesla.accelerate(20);
