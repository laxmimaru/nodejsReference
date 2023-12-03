const { error } = require('console')
const fs = require('fs')

console.log('before sync read')
/*****  reading synchronously *****/
const fileContents = fs.readFileSync('./file.txt',"utf-8")
console.log(fileContents)

console.log('before  Async read')
/*****  reading Asynchronously *****/

fs.readFile("./file.txt","utf-8",(error,data)=>{
    console.log('async data read = ',data)
})

console.log('after Async read') //this line gets executed before async read completes

fs.writeFileSync("greet.txt","Hello kyle") //sync write

fs.writeFile("greet.txt","Hello Async kyle",(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log("File written")
    }

}) //Async write