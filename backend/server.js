require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT
const origin = process.env.ORIGIN
const path = require('path')
const cors = require('cors')
app.use(express.json());
app.use(express.static(path.join(__dirname, 'images')))
const db = require('./connection/connection')
const testRoute = require('./routes/test');


var corsOptions = {
  origin: [origin],
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/home', testRoute)
app.listen(port,  () => {
  console.log(`Server started at port ${port}`)

})

