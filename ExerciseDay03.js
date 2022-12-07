// display multiplication table of given integer
 
let number = 3; 
 for(let i = 1; i <= 10; i++) {
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`); 
 }

// check whether a string is palindrome or not
let kata = "purwadhika";
let reverseString = kata.split("").reverse().join("");
    if(kata == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }


// convert centimeter to kilometer
let num3cm = 100000;
let num3km = num3cm/100000;
console.log(num3km + " Kilometer");

//format number as currency 
let number4 = new Number(1000);
let result = number4.toLocaleString('ID', 
    {style: 'currency', currency: 'IDR'});
console.log(result); 


// remove the first occurrence of given "search string" from a string

let str = "MSIG Tower"; 

let newstr = str.replace("IG","");

console.log(newstr);

// capitalize the first letter of each word in a string 

let str1 = "phyton language"

// let newstr = str1.charAt(0).toUpperCase
let newStr ="";
newStr = str1.charAt(0).toUpperCase();
let newStr1 = str1.slice(1);




console.log(newStr + newStr1);


// write code to reverse a string 

let word = "alabama";

let word1 = word.split("").reverse().join()
console.log(word1);

// 
 let temp = "";
 console.log(word.length)

 for (let i = 0; i < word.length; i++) {
    console.log(word[word.length - 1 - i]);
    temp += word[word.length -1 - i];
 }
 
 console.log(temp);