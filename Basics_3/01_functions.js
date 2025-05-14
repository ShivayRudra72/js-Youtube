function sayName() {
    console.log("m");
    console.log("a");
    console.log("h");
    console.log("a");
    console.log("d");
    console.log("e");
    console.log("v");        
}
sayName()  // this denote sayName --->references , ()---->execute


//ADD TWO NUMBERS
function addTwoNumber(number1,number2){  // parameters
    console.log(number1+number2);
}
addTwoNumber(4,5) // passing arguments

//Method : 2
function TwoNumber(number1,number2){  // parameters
    let result = number1 + number2
    return result;
}

const result = TwoNumber(3,4)
console.log("Result is : ",result); // Result is :  7


//Method : 3
function loginUserName(username){
    return `the valid username is ${username}`
}
console.log(loginUserName("rudrasaini")); // the valid username is rudrasaini

// NOTES
// -->IF THE VALUE IS NOT PASS IN THE ARGUMENTS THE PRINT " UNDEFINED "


//Method : 4
function loginUserName(username){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `the valid username is ${username}`
}

console.log(loginUserName());
// output display----->
// please enter a username
// undefined

//console.log(loginUserName("rudrasaini"));


