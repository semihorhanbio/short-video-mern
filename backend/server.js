import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

//App Config
const app = express()
const port = process.env.PORT || 9001
const connection_url = process.env.MONGODB_CONNECTION_URI

//Middeleware

//DB Config
mongoose.connect(connection_url)

//API Endpoitns
app.get('/', (req, res) => {
    res.send('Welcome to short video mern app')
})

//Listener
app.listen(port, () => console.log(`Listenig on localhost: ${port}`))