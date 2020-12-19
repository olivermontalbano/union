const express = require('express')
require("dotenv").config();
const environment = require('./config')
const routes = require('./routes/index');


const app = express()

console.log('env=====', environment)

app.use("/", routes)

app.listen(environment.port, () => {
  console.log(`Example app listening at http://localhost:${environment.port}`)
})