// ++++++++++++++++++++++++ "Dates" ++++++++++++++++++++++++++++++++++++++ //

//object
let myDate = new Date() 
console.log(myDate); // 2025-05-12T13:05:54.684Z 

// FOR MORE BETTER APPROACH WE USE MORE PROPERTY---->
// THIS IS THE MOST USES 'DATES' IN --- " JAVASCRIPT"
console.log(myDate.toDateString()); // Mon May 12 2025
console.log(myDate.toISOString()); // 2025-05-12T13:11:23.979Z
console.log(myDate.toISOString()); // 2025-05-12T13:11:23.979Z
console.log(myDate.toLocaleDateString()); // 5/12/2025
console.log(myDate.toLocaleString()); // 5/12/2025, 1:11:23 PM
console.log(myDate.toLocaleTimeString()); // 1:11:23 PM
console.log(myDate.toString()); // Mon May 12 2025 13:11:23 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString()); // 13:11:23 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Mon, 12 May 2025 13:11:23 GMT

// INTERVIEW QUESTION -->
console.log(typeof myDate); // object

// NOTES
// --> JAVA MAI MONTH '0' SAI START HOTA HAI

// CREATED DATE IN  JS
const myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// CREATED DATE IN  JS : IN MM/DD/YY
const myCreatedDateSecond = new Date("01-23-2023")
console.log(myCreatedDateSecond.toLocaleString()); // 1/23/2023, 12:00:00 AM

//USES OF : " TIMESTAMP" IN JS
// it uses in : POLL 
let myTimeStamp = Date.now()
console.log(myTimeStamp); //1747068086574
console.log(myCreatedDate.getTime()); //1674432000000

//INTERVIEW QUESTION
// HOW TO CONVERT IN TIME IN SECOND
console.log(Math.floor(Date.now()/1000)); //1747068086 


   











