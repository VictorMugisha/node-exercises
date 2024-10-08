const fs = require("fs")
const fsPromises = require("fs").promises

fs.writeFileSync("./greet.txt", "Hello Victor")

// fs.writeFile("./greet.txt", "Hello Victor", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("File written successfully")
//     }
// })


// Reading File Synchronously
const fileContent = fs.readFileSync("./greet.txt", "utf-8")
// console.log(fileContent)

// Readinf File Asynchronously
// fs.readFile("./greet.txt", "utf-8", (error, data) => {
//     if (error) 
//         console.log(error)
//     else 
//         console.log("Data from file: ", data)
// })

// Reading file using promises
async function readFile () {
    try {
        const data = await fsPromises.readFile("./greet.txt", "utf-8")
        console.log(data)
    } catch(err) {
        console.log("ERROR: ", err)
    }
}

readFile()