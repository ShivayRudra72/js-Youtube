// USE OF FOR EACH LOOP
const  coding = ["js", "ruby", "java", "python", "cpp"]
//esme koi function ka naam nhi hota haiii
// coding.forEach( function (val) {
//     console.log(val);
// })

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
    //output
    // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
})

//ANOTHER EXAMPLE OF DATABASE
const myCoding = [ 
    {
        languagename : "java",
        languagefilename : "java"
    },

    {
        languagename : "javascript",
        languagefilename : "js"
    },

    {
        languagename : "python",
        languagefilename : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);  //item.___ iske jagah pe jo 
}) 