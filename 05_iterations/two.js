// Array mai STRING aise daalte haii
// [" ", " ", " "," ", " ", " ", " ", " "] 

// Array mai OBJECT aise daalte haii
// [{ }, { }, { }, { }, { }, { }]


// USES OF WHILE LOOP

let index = 0
while (index <= 10) {
    console.log(`the value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`the value is ${myArray[arr]}`); // ye line imp hai
    arr = arr + 1         // ye generally +1 kr dega nhi to infinite mai ho jayega
}