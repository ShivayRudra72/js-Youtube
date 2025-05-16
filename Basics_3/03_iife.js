// (IIFE)-- > "IMMEDIATELY INVOKED FUNCTION EXPRESSION"
// humlog jo bh code likhe -- > turant humko DBC chhaiye
// IMPORTANT FOR INTERVIEW

// it is a --"NAMED IIFE"
(function chai() {
    console.log(`DB CONNECTIVITY`);
})(); // output : DB CONNECTIVITY

//HOW IT WORKS : ()--FUNCTION ()--EXECUTION



// MOST IMPORTANT METHOD
// it is --"SIMPLE IIFE"
( (name) => {
    console.log(`MONGODB ${name}`);
}) ("rudra") //MONGODB rudra


//Always remember : agr do iife ek sath likhna hai to  "" ; ""  must necessary
