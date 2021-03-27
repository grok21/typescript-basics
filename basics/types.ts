/* Types */ 

// Bool
const isFetching: boolean = true;

// String
const str: string = 'Hello';

// Number
const int: number = 1;
const float: number = 1.1;
const num: number = 3e10;

// Array of integers
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// Tuple
const tuple: [string, number] = ['Vadim', 123];

// Any
let variable: any = 1
console.log(variable);
variable = '1'
console.log(variable);


console.log((int));
console.log(float);
console.log(num);
console.log(str);
console.log(arr1);
console.log(arr2);
console.log(tuple);

function myName(name: string): void {
  console.log(name);
  
};

myName('ABC');

// Never
function throwError(): never {
  throw('ERROR!!!')
}



