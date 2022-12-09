// EXERCISE 

// 1. 
// // min
// const numMin = arr => Math.min(...arr);

// function numMin1(){
//     Math.min(...arr)
// }

// console.log(numMin(arrValue));

// // max
// const numMax = arr => Math.max(...arr);

// console.log(numMax(arrValue));



// avg 

// const numSum = arr => arr.reduce((a,b, ...arrValue) => a + b, 0);
// console.log(numSum(arrValue));

// let avg = numSum / arrValue.length; 

// console.log(avg);

// const numSum = function(arr){
//     return arrValue.reduce(function(a,b){
//       return a + b
//     }, 0);
//   }

//   let avg = numSum()/arrValue.length
//   console.log(avg);

//   console.log();

let arrValue = [1, 9, 2, 8, 3, 7];

function getLowHighAvg() {

    let lowest = Math.min(...arrValue);
    console.log(lowest);
    let highest = Math.max(...arrValue);
    console.log(highest);
    let avg = 0;
    let totalNumber = 0;

    for (let i = 0; i < arrValue.length; i++) {
        totalNumber += arrValue[i];
        avg = totalNumber / arrValue.length;
        
    }

    return "Lowest = " + lowest + ', ' + "Highest = " + highest + ', ' + " Average = " + avg;

    //   let avg = numSum()/arrValue.length
    //   console.log(avg);
}

console.log(getLowHighAvg());

// 2. 

let box = ['Shirts', 'Tops', 'Socks', 'Shoes'];
let word = 'and';

function Boxes(arr) {

    let newBox = box.slice(0, box.length - 1);
    let last = box[box.length - 1];

    if (box.length === 1) {
        return box[0];
    }


    return newBox.join(', ') + ' ' + word + ' ' + last;

}

console.log(Boxes());

// 3. (4)
// let num1 = [1, 3, 5, 7, 9, 11, 21];
// let num2 = [2, 4, 6, 8, 10, 2 ];

// function adding(num1, num2)
// {
//     let arr = []
//     let length = num1.length;

//     if (num1.length > num2.length) {
//         length = num1.length-1
//     } else {
//         length = num2.length-1
//     }

//     for(i = 0; i < length; i++) {
//         arr[i] = num1[i] + num2[i];

//         if (num1.length > num2.length)
//         {
//             arr[length] = num1[num1.length-1]
//         } else {
//             arr[length] = num2[num2.length-1]
//         }
//     }

//     return arr
// }
// console.log(adding(num1,num2));

// lecture's answer
let arr1 = [1, 3, 5, 7, 9, 11, 21];
let arr2 = [2, 4, 6, 8, 10, 2 ];
let sumTwoArray = (arr1,arr2) => {
    let newArr = [];
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i < length; i++) {
        let numb1 = arr1[i] ? arr1[i] : 0;
        let numb2 = arr2[i] ? arr2[i] : 0;
        newArr.push(numb1 + numb2);
    }

    return newArr
}

console.log(sumTwoArray(arr1,arr2));

// 4 (5).
// let ada = ['red','blue','yellow'];

// function dataFilled (val, Arr){
//     for (i = 0; i < Arr.length; i++) {
//         if (val == Arr[i]) {
        
//             return "angka sudah ada"

//         } else {
//             Arr[Arr.length] = val;
//             return Arr
//         }
//     };
// }

// console.log(dataFilled("green", ada));
// console.log(dataFilled("blue", ada));

// lecture's answer 
let Arr = [1, 3, 5, 7, 9, 11, 21];

let clonePush = (newData, array) => {
    let temp = null;
    for (let i = 0; i < array.length; i++){
        if (newData == array[i]) {
            temp = array[i];
        }
    };

    if (temp) {
        return 'Data Exist'
    } else {
        array[array.length] = newData;
        return array;
    }
}

console.log(clonePush(5, Arr));
console.log(clonePush(2, Arr));

