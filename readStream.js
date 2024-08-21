const fs = require("fs")

const readStream = fs.createReadStream("./longFile.txt", "utf-8")
const writeStram = fs.createWriteStream("./result.txt", "utf-8")

readStream.on("data", (chunck) => {
    console.log("\nRecieved data: ")
    writeStram.write(chunck)
})

readStream.on("end", () => {
    console.log("----------------Finished readin file--------------")
})