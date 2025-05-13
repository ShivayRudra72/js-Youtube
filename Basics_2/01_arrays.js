// ++++++++++++++++++++++ ARRAYS ++++++++++++++++++++++++ //
//array declarations
const myArr = [0 ,1, 2, 3 ,5, 50]
console.log(myArr); // [ 0, 1, 2, 3, 5, 50 ]

const myArr2 = (1,2,3,4,5,6,7,8)
console.log(myArr2);

// creation of object : and then print
const arr = new Array(1,0,98,78)
console.log(arr);



// ++++++ ARRAYS METHODS ++++++++++ //
const dev = ["spiderman" , "captain" , "furious" , "thor"];

//operations
dev.push("ro") // add element
console.log(dev); // [ 'spiderman', 'captain', 'furious', 'thor', 'ro' ]


dev.pop() // in pop : last element will be deleted
console.log(dev); // [ 'spiderman', 'captain', 'furious', 'thor' ]


dev.unshift(900) // it can add 900 in the 1st position of : "900"
console.log(dev); // [ 900, 'spiderman', 'captain', 'furious', 'thor' ]

dev.shift()
console.log(dev); // [ 'spiderman', 'captain', 'furious', 'thor' ] : 900 is deleted



// IN JS HOW YOU KNOW IN ARRAY THE ELEMENT IS : PRESENT OR NOT
console.log(dev.includes("thor")); // true
console.log(dev.indexOf("thor")); // 3

console.log(dev); 




