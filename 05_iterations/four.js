// object ko forof loop mai kaise use kre 

const myObject = {
    js: "javascript",
    cpp: "c++",
    ruby: "ruby",
    swift: "swift by app"
}

// object mai : forin loop lagta haii
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
    //output
    //js shortcut is for javascript
    // cpp shortcut is for c++
    // ruby shortcut is for ruby
    // swift shortcut is for swift by app
}
