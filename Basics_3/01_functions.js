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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// in most of the cases on e-commerce platform user add no of items and cancel it and add it more no of items 
// in that scnerio we use the method ----------->

function calculatedCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculatedCartPrice(200,500,4000,5000)); // 4000 5000


// how the object :: use in function ---> let's see
const user = {
    email : "rudrasaini@gamil.com",
    dob : "7 july 2000",
    gender : "male"
}

function handleuser(anyobject){
    console.log(`the email id of a user is ${anyobject.email} and dob is ${anyobject.dob} and gender is ${anyobject.gender}`); 
    // the above aswer : he email id of a user is rudrasaini@gamil.com and dob is 7 july 2000 and gender is male
}
handleuser(user)

// how function use in :: "ARRAYS" --------->
const newArr = [45,34,23,25]
function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(newArr)); // 34
console.log(returnsecondvalue([45,34,23,25])); // 34




