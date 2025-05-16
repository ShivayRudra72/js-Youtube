// NOTES
// --> FOR TYPE CHECKING USE : STRICT EQUAL "==="  
// var keyward is completely ---> "Global"

//BASICS PROGRAM OF "" IF CONDITION ""
if(3 != 2){
    console.log("executed");
} else {
    console.log("not executed");
}

const temperature = 30
if(temperature === 41){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// akash
const grade = 40
if(grade > 50){
    console.log("akash pass");
} else {
    console.log("akash fail");
}

// printing example of : "IMPLICIT SCOPE"
const savingMoney = 5000
if (savingMoney > 400) {
    console.log("pass");
} else {
    console.log("fail");
}

//take another example uses of "elseif" , "else" , "if"
const balance = 5000
if (balance < 8400) {
    console.log("balance is less than 8400");
} else if (balance < 600) {
    console.log("balance is less than 600");
} else if (balance < 50){
    console.log("balance is less than 50");
} else {
    console.log("less than 1200"); // balance is less than 8400
}

// E-COMMERCE PLATFORM -- EXAMPLES
const userLoggedIn = true
const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("allow to buy course"); // allow to buy course
}

