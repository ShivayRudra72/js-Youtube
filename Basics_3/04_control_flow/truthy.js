// NOTES 
// 1.[] -- > ALSO PRINT "GOT USER"


//SOME OF THE TERMS MUST REMEMBER FOR "INTERVIEW"
// 1. false == 0 -- >true
// 2. false == '' -->true
// 3. 0 == '' --> true



// WHAT ARE THE FALSY VALUE-->
// False , 0, -0, BigInt , 0n , undefined , Nan , null , " "



// what are the "truthy values" && "you are surprised to see that values" -->
// truthy value : string ke andr hai to truthy values -- > "0"
// 'false' , "0" , " ", [] , {}, function(){}



const username = "saurabh@ai"
if(username){
    console.log("Got user");    // got user
} else {
    console.log("Dont't get user");
}



// example of : "TRUTHY VALUES"
//take another example ::
const useremail = ""
if (useremail.length === 0) {
    console.log("array is empty");  // array is empty
    
}



//object example--->
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");  //object is empty
}


// Nullish Coalescing Operator(??) :: entire code focus on "null" , "undefined"
let val1;
val1 = 5 ?? 10
val2 = null ?? 40
val3 = undefined ?? 400
val4 = null ?? 60 ?? 700 ?? 6000

console.log(val1); //5
console.log(val2); //40
console.log(val3); //400
console.log(val4); //60 // null ?? 60 → 60 (because null is nullish, so it takes the next value 60)

//USES OF -- "TERNARY OPERATOR"
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// answer is : mpre than 80

