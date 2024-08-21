const fs = require("fs")

fs.writeFileSync("./greet.txt", "Hello Victor")

fs.writeFile("./greet.txt", "Hello Victor", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File written successfully")
    }
})