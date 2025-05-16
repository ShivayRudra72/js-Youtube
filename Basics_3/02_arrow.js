// uses of "THIS" keyword ---> they tell about the current "context"

const user = {
    username : "saurabh",
    price : 5000,

    welcomeMessage : function(){
        console.log(`${this.username}, looking for government job`); // in this 
        console.log(this);
        
    }
}

user.welcomeMessage() // saurabh, looking for government job

// change name "saurabh" to :: Parmeshwar
user.username = "Parmeshwar";
user.welcomeMessage() // Parmeshwar, looking for government job

//INTERVIEW QUESTION
// Q:BROWSER KE ANDAR KAUNSA GLOBAL OBJECT HAI WO : ANS :: "WINDOW OBJECT HAI"

// REGULAR FUCTION
function chai() {
    let username = "pankaj"
    console.log(this.username);
    
}
chai() // undefined


//METHOD--->2
// const charger = function(){
//     let username = "pankaj"
//     console.log(this.username);
// }
// this.charger() // undefined

// +++++++++++++++++++++++ " ARROW " +++++++++++++++++++++++++++++++ // 
const shyam = () => {                            // =>"arrow function"
    let username = "pankaj"
    console.log(this.username);
}

// IT IS A -- "IMPLICIT"
const addtwo = (num1,num2) => {
    return num1+num2;
}
console.log(addtwo(5,6)) // 11


// it is a "emplicit "
const addthree = (num1,num2) => num1 + num2
console.log(addthree(4,5)); // 9

// NOTES
//--> "CURLY KEYWORD LIKHA TO : TO RETURN LIKHNA PADEGA"
//--> "AGR CURLY KEYWORD "NHI" LIKHAA TO : RETURN KEYWORD NHI LIKHNA PADEGAA
 

//<---- how to return a object ---->
const object = (num4 , num5) => ({username : "rudrapraksh"})
console.log(object(2,5)); // { username: 'rudrapraksh' }
