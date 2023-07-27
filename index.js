const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors());

const port = process.env.PORT || 2000 // loaclhost port and heroku port 

const apiData = require("./data.json") // api data import 

app.get("/ ", (req,res)=>{
    res.send(apiData); // get apiData
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})