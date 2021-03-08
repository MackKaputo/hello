const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//--------------------------
//http = require("http")
//--------------------------

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

//-----------------------------
//onst server = http.createServer(app)
//-----------------------------

app.use(cors())   //allows access from different hosts such as the frontend port which is different from the one the app is listening to
app.use(express.json())

//const uri = process.env.ATLAS_URI    With atlas!!!
//ATLAS_URI = mongodb+srv://mack:PASSWORD@mackcluster1.si6pn.mongodb.net/test?retryWrites=true&w=majority

//With docker:
//const uri = process.env.url
//The following returns a promise
mongoose.connect("mongodb://localhost:27017/myshinynewdb", {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology:true})
 .catch((err) => console.log(err))  //Allow display of any error

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

//Server to require or import the files
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
//Tell the app to use the above files which contain the models
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

