class Car {
    constructor(make, model, speedKmh = 0) {
        this._make = make;
        this._model = model;
        this._speedKmh = speedKmh;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    get speedKmh() {
        return this._speedKmh;
    }

    set speedKmh(value) {
        this._speedKmh = value;
    }

    get speedUS() {
        return this._speedKmh / 1.6;
    }

    set speedUS(value) {
        this._speedKmh = value * 1.6;
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

const ford = new Car('Ford', 'Mustang', 120);
console.log(`VEHICLE DATA 1: ${ford.make} ${ford.model} is moving at ${ford.speedKmh} km/h`);
console.log(`VEHICLE DATA 1: ${ford.make} ${ford.model} is moving at ${ford.speedUS} mi/h`);
