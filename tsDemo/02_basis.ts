let a: number;

a = 10;


function sum (a: number, b: number): number {
    return a + b;
}

let b: number = sum(111, 2222);

let c: "female" | 'male';
c = 'male';

let d;
d = 1;
d = true;
d = "sdsda";

let un: unknown;

let str: string;
str = <string>un;

let obj: {
    name: string,
    [propName: string]: any
}

let func: (a: number, b: number) => number;
func = function(a: number, b: number): number {
    return a + b;
}

let arr1: number[];
let arr2: Array<number>
arr1 = [1, 2, 3];

let tup: [string, string];

let mul: {name: string} | {age: number};

class animal {
    constructor() {

    }
    run(): void {
        
    }
}