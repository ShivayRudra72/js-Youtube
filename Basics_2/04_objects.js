// how to declare object with the help of ::
// 1."SINGLETON"  2."CONSTRUCTOR"

const tinderUser = new Object() // this is singleton declartions
//const tinderUser = {}  // this is the Non-Singleton Declarations
// BUT BOTH HAVE THE SAME OUTPUT ---------> {}

//ADD "ID" IN THE : TINDERUSER
tinderUser.id = "123"
tinderUser.name = "rudra"
tinderUser.age = "20"
tinderUser.isLoggedIn = "true"
tinderUser.college = "imsec"

// console.log(tinderUser);

// creating object in object in js ---->
const regularUser = {
    email : "ayushsaini2323@gmail.com" ,
    fullName : {
        UserFullName : {
            firstname : "rudra",
            lastname : "saini",
            work : "remote",
            Address : {
                villpost : "reotipur",
                wardno : "07" ,

                Graduation : {
                    college : "imsec" ,
                    location : " ghaziabad"
                }
            }
        } 
    }
}

// this is way to access any object : syntax
// console.log(regularUser.fullName.UserFullName.Address.Graduation);


// how to add object in js
// --->Object.assign({} , .... , ... ) -->this is the actual syntax
const obj1 = {1: "A" , 2: "B"}
const obj2 = {3: "C" , 4: "D"}

// method : 1
// printing with the help of ::: "SPREAD"
// const obj3 = {...obj1,...obj2,}
// { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// method : 2
const obj3 = Object.assign( {}, obj1 , obj2)
console.log(obj3); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// +++++++++++++++++++++++++++++ "DE-STRUCTURING ++++++++++++++++++++++++++ //"

const course = {
    coursename : "js-in-hindi",
    courseInstructor : "hitesh chaudhary",
    price : "$999"
}

//humlog kisi bhi character ko access krne ke liye course.(courseInstructor) : likhe hai 
// this is right but humko jada elemnt ko acccss kre to : "SYNTACTICAL ISSUE"

const {courseInstructor : instructor} = course
console.log(instructor); // hitesh chaudhary



