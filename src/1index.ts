let x: number = 10;
console.log(x);
console.log(typeof (x));

let name: string = 'naveen'
console.log(typeof name)

let flag: boolean = true;
console.log(typeof flag);

function addition(x: number, y: number): number {
    return x + y;
}
let add = addition(2, 3);
console.log(add);

function getTrainerName(name: string): string {
    return name;
}
let trainName = getTrainerName('Niranjan')
console.log(trainName);

function printData(): void {
    console.log('print user data');
}
printData();

function getNumber(): number {
    return 100;
}

function getNumberArray(): number[] {
    return [100, 200, 300];
}

let p: number[] = [1, 2, 3]
console.log(p);
console.log(typeof p);

//let add = ()=> a+b; //arrow fuction in JS
let add1 = (a: number, b: number): number => a + b; //arrow fuction in TS
let result = add1(3, 9)
console.log(result);
