// EXERCISE
// convert celsius to fahrenheit
// let cel = 64;
// let fr = cel * 1.8 + 32
// console.log(fr);

// whether the number is odd or even

// check whether the number is prime number or not

let num2 = 3;
let bool = true; 
for (let i = 2; i < num2; i++) {
    if (num2 % 1 == 0) {
        bool = false;
        break
    }
}

console.log(bool ? `${num2} is prime number` : `${num2} is not a prime number`)
// console.log(bool1 ? `$num2 is prime number` : `${num2} is not prime number`);

// find the sum of the numbers 1 to N 

// let num3 = 10;
// let sum = 0;
// let message = "";
// let i = 0;
// for (i = 1; i <= num3; i++) {
//     sum += i;
//     if (i !=1) {
//         message += '->';
//     }
//     message += `${i}`;
//     console.log(i)
// }
// console.log (`sum of the numbers ${message} = ${sum}`)

// find factorial of a number

// num2.toExponential

// let angka = 6; 

// if (angka < 0) {
//     console.log("error");
// } else {
//     let factorial = 1;
//     for (let i = 1; i <= angka; i++) {
//         factorial *= i;
//         console.log(factorial)
//     }
// }

// print the first N fibonacci number 
// let num4 = 8;

// let a = 0;
// let b = 1; 
// let str = "";

// for (let i = 0; i < num4; i++){;
//     temp = a + b; 

// if (i != num4) (
//     str += ", "
// )
// }

// a=b;
// b=temp;

// console.log(`${num4} + ${str}`)