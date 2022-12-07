
// 1. 
let h = 4; //limit seharusnya output jadi ada 4 baris
let result = ""; //nampung jawaban string
let count = 1; // buat munculin gambarnya

function triangle(h) {
  console.log(h);
  
  for (let i = 0; i < h; i++) {
    console.log(result);
   
    for (let x = 0; x <= i; x++) {
       console.log(result)
    //    result += ''
    //    dibawah 9, tambahin 0
        if (count > 9) {
            result += count++ + " ";
            console.log(result);

          } else { // pas 10
            result += "0" + count++ + " ";
            console.log(result);
          }
    }
    result += "\n";
  }

  return result;
}

let h1 = triangle(4); 
console.log(h1);

// 2. 

let a = 20;

function FizzBuzz(num){
    let str = ""
    for (i = 1; i <= num; i++){
        console.log(i);

        if (i % 3 == 0 && i % 5 == 0){
            str += "FizzBuzz"

        } else if (i % 3 == 0){
            str += "Fizz"

        } else if (i % 5 == 0){
            str += "Buzz"

        } else {
            str += i
        }
        str += "\n"

        console.log(str)
    }

    return str

}

console.log(FizzBuzz(a))

// 3. 
let berat = 50;
let tinggi = 170;
let str1 = "";

function yourBMI(weight, height) {

const bmi  = weight / (height ** 2);
    console.log(bmi);

    if (bmi > 39.9) {
      mess = "Obesity";
      console.log(mess);

    } else if (bmi >= 30.0) {
      mess = "Very Overweight";
      console.log(mess);

    } else if (bmi >= 25.0) {
      mess = "Overweight";
      console.log(mess);

    } else if (bmi >= 18.5) {
      mess = "Ideal";
      console.log(mess);

    } else {
      mess = "Less Weight";
      console.log(mess);
    }

    return mess;
  }
  
  let myBMI = yourBMI(63, 1.70);

console.log("Congratulations! Now you have " + myBMI + " body weight");

// 4. split odd and even

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = angka.filter(function(num) {
    
    return (num % 2 == 0);

});
console.log(even);

// 5. 

const splitString = function (str) {         
    let arr = [];                                
    let temp = "";                                      
    for (var i = 0; i < str.length; i++) {              
      if (str[i] !== " ") {                             
        temp += str[i];                                
      } else {                                         
        arr.push(temp);                           
        temp = "";                                      
      }
        if (i == str.length - 1){                        
        arr.push(temp)
        }
    }
    return arr;                                  
  };
  const testString = "Hello World";  
  console.log(splitString(testString));