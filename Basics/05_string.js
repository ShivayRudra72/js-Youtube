let myname = "ganesha"
let repoCount = 40

// IN THE MODERN TIME THIS SYNTAX ARE NOT USED OR WE SAY LOOKING ODD
// console.log(myname + repoCount  + " details");

// ++++ AS COMPARED TO THE ABOVE STATEMENT THIS LOOKING : MODERN +++++ //
console.log(`Hello my name is ${myname} and my repoCount is ${repoCount}`);

// FOR PRINTING LENGTH
console.log(myname.length); // 7

// For Getting Index Position
console.log(myname.__proto); //undefined

//convert string : uppercase
console.log(myname.toUpperCase()); //GANESHA

// checking : 'CHARACTER' position
console.log(myname.charAt(5)); //h
console.log(myname.indexOf("a")); // 1

//USING OF : SLICE
const newString = myname.substring(0 , 5)
console.log(newString); // ganes

//another example
const anotherString = myname.substring(-7 ,6)
console.log(anotherString); // ganesh

//USES OF TRIM
const newStringOne ="    container     "
console.log(newStringOne);
console.log(newStringOne.trim); //     container     

const url = "rudraprakash%2072@gmail.com"
console.log(url.replace('%20','_'));  // rudraprakash_72@gmail.com

// check for : character present or not
console.log(url.includes('rudraprakash')); // true
console.log(url.includes('rudra')); // true









