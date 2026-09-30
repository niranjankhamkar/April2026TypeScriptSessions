
//public(default), protected, private

class Car {
    public name: string = 'Honda';
    protected model: string = 'honda civic';
    private license: number = 9090;
    readonly logo: string = 'my logo';  // like final keyword in java

    getCarInfo(): void {
        console.log(this.name);
        console.log(this.model);
        console.log(this.license);
        console.log(this.logo);
    }
}

class Audi extends Car {
    getAudiInfo(): void {
        console.log(this.name);
        console.log(this.model);
    }
}

class Cycle {
    getSomeData(): void {
        let c: Car = new Car();
    }
}


