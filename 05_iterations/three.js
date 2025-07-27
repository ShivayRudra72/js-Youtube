// Array mai STRING aise daalte haii
// [" ", " ", " "," ", " ", " ", " ", " "] 

// Array mai OBJECT aise daalte haii
// [{ }, { }, { }, { }, { }, { }]

// FOR OF 
//syntax of for of loop
// for (const element of object) {
    
// }
const arr = [0,1,2,3,4,5]
for (const mahadev of arr) {
    console.log(mahadev);
}

//object e.g;
const greetings = "HELLO WORLD"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//USES OF MAP
// Map is a key value pair , no duplicate value , all unique values
// remembering the original insertion order of the keys
const map = new Map()
map.set('IN',"India");
map.set('US',"United State Of America");
map.set('FR',"France");

//console.log(map);

// agr mere ko map print krana hai array sai to use this
for (const [key, value] of map) {
    console.log(key, ':-' , value);
}


