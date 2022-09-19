class Vehicle{
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    honk() {
        return 'beep';
    }
}

let myFirstVehicle = new Vehicle('Toyota', 'Prius', 2005);

class Car extends Vehicle{
    constructor(a,b,c) {
        super(a,b,c);
    }
    toString() {
        return `The vehicle is a ${this.a} ${this.b} from ${this.c}`;
    }
    numWheels = 4;
}

let myFirstCar = new Car('Toyota', 'Prius', 2005);

class Motorcycle extends Car {
    constructor(a,b,c) {
        super(a,b,c);
    }
    revEngine() {
        return 'VROOM!!!'
    };
    numWheels = 2
}

let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

class Garage {
    constructor(cap) {
        this.vehicles = [];
        this.cap = cap;
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles allowed in here!";
        }

        if (this.vehicles.length >= this.cap) {
            return "Sorry, we're full";
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!';  
    }
}
