const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello Geeee")
})

app.listen(3000, () => {
    console.log("Server is Listening:3000........")
})