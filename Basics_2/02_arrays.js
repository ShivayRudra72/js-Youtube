const marvel_heros = ["spiderman" , "captainAmerica" , "thor"]
const dc_heros = ["flask" , "superman" , "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);


// uses of : "CONCAT" for add two Arrays
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // [ 'spiderman', 'captainAmerica','thor','flask','superman','batman']


// WE GENRALLY ADD TWO ARRAY WITH THE HELP OF : "SPREAD" IN JS
const all_new_Heros = [...marvel_heros, ...dc_heros]
console.log(all_new_Heros); // [ 'spiderman', 'captainAmerica','thor','flask','superman','batman']


// uses of "FLAT" -------->
const another_array = [1 ,2 , 3 , [4 , 5 ,6 , 7] , [11 , 12, 13, 14, [15, 16, 17, 18]]]
const all_another_array = another_array.flat(Infinity)
console.log(all_another_array); // WITH THE HELP OF "CONCAT" THE ANSWER LOOK LIKE : [ 1,  2,  3,  4,  5,  6, 7, 11, 12, 13, 14, 15, 16, 17, 18]



///with the help of name :: we convert into thE "ARRAY"
console.log(Array.isArray("rudra")); // false
//correct method------------->>>>>
console.log(Array.from("Rudra")); //[ 'R', 'u', 'd', 'r', 'a' ]

//BUT IN THE SOME SECENRIO FLAT CANNOT IDENTIFY WHICH ELEMENT SHOULD WE TAKE
console.log(Array.from({name : "mahadev"})); // the answer is : [] follow the above statement


//we are taking some value and print with the help of : "ARRAYS"
//HERE OF IS USE FOR : PRINT THE ELEMENT IN THE "SQUARE BRACKET"
let run1 = 30;
let run2 = 40;
let run3 = 50;
console.log(Array.of(run1,run2,run3)); // [ 30, 40, 50 ]


//SUMMMARY
//concat
//spread
//flat
//isArray
//from
//of

