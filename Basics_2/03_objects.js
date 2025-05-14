// ++++++++++++++++++++++ OBJECT LITERALS ++++++++++++++ //
let userdetails = {
    name : "rudra" , 
    "full name " : "mahadev saini" ,
    branch : "cse" ,
    college : "imsec" ,
    section : "cse3" ,
    favsubject : "bigdata"
}
console.log(userdetails);

//how to access any character
console.log(userdetails.college); // imsec

// the statement is right but this is not the right to way to access any element
// right method ------>

//humlog .operator use krke hm access kr payenge
console.log(userdetails["full name "]); // mahadev saini

//uses of symbol in JS
const mySym = Symbol("key1")
const JSUser2 = {
    [mySym] : "rudra op"
}
console.log(JSUser2[mySym]); // rudra op
console.log(typeof mySym); // check type : "symbol"



