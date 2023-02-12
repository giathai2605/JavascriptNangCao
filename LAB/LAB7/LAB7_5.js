class CarCl {
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

    brake(amount) {
        this._speedKmh -= amount;
        if (this._speedKmh < 0) {
            this._speedKmh = 0;
        }
    }
}

class EVCL extends CarCl {
    #charge = 0;

    constructor(make, speedKmh, charge) {
        super(make, speedKmh);
        this.#charge = charge;
    }

    get charge() {
        return this.#charge;
    }

    set charge(value) {
        this.#charge = value;
    }

    accelerate(amount) {
        super.speedKmh += amount;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
    }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(`CAR DATA 1: Car '${rivian.make}' traveling at ${rivian.speedKmh} km/h, with ${rivian.charge}% battery`);
rivian.accelerate(20);
rivian.chargeBattery(30);
rivian.brake(10);
console.log(`CAR DATA 1: Car '${rivian.make}' traveling at ${rivian.speedKmh} km/h, with ${rivian.charge}% battery`);
