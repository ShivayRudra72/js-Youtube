let score = 33

console.log(typeof score); //number
console.log(typeof (score)); //number

// this above written statement show the----> number



let age = "33abc"
console.log(typeof age); //string
console.log(typeof (age)); //string
// this above written statement show the ----> "string"



// in js how to actually know the user type the statements is number or not
// use of syntax properly Number(....)
// 33-> 33
// "33ass" --> Nan
// for null = 0
// for undefined = Nan
// for boolean = 1
let varInNumber = Number(age);
console.log(typeof varInNumber); // in js it can automatically define the number but if we type the console.log(varInnumber)--> it will show the Nan
console.log(varInNumber); // this show a NaN -- means not a number


//how to check for boolean
// 0 --> false
// "" -->false
// "rudra" -->true
let isLoggedIn = "rudra"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  // true


//how to check for String
// anything we write like--a,0,1,null,undefined-->this shoes a string
let aNumber = 1
let stringNumber = String(aNumber)
console.log(typeof stringNumber); // shows--string






