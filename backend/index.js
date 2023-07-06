require("dotenv").config({ path: "./assets/.env" })
const cors = require("cors")
const express = require("express")
const { readJsonFile,
    setJsonValue } = require("./assets/modules/jsonFucntions.js")


let app = express()

app.use(express.json())
app.use(cors())

app.get("/get-buttons-data", function (req, res) {
    res.send(readJsonFile("./assets/data/buttonsData.json"))
})

app.post("/get-admin", function (req, res) {
    if (process.env.login === req.body?.login) {
        if (process.env.password === req.body?.password) {
            res.sendStatus(200)
            return
        }
    }

    res.sendStatus(400)
})

app.post("/set-new-button", function (req, res) {
    res.send(setJsonValue("./assets/data/buttonsData.json", req.body))
})

app.listen(process.env.port, function () {
    console.log(`CORS-enabled web server\nserver live in port ${process.env.port}`)
})

