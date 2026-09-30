class Truck {
    loading(): void {
        console.log('truck loading');
    }
}

class Car {
    start(): void {
        console.log('car -- start');
    }
    stop(): void {
        console.log('car -- satop');
    }
    refuel(): void {
        console.log('car -- refuel');
    }
}

class BMW extends Car {
    override start(): void {
        console.log('bmw -- start');
    }
    autoParking() {
        console.log('bmw -- auto parking');
    }
}
let bmw: BMW = new BMW();
bmw.start();
bmw.stop();
bmw.refuel();
bmw.autoParking();
console.log('-----');

let car: Car = new Car();
car.start();
car.stop();
car.refuel();
console.log('-----');
//top casting:
//child class object can be referred by parent class ref variabale:
let c: Car = new BMW();//IS - A
c.start();
c.stop();
c.refuel();
console.log('--------');
//down casting:
//parent class object can be referred by child class ref variable:
//let b: BMW = new Car();
//Libray class:
//section extends Library
//School: general policies : abstract methods();
//depts: fee, HR, library, kids, senior