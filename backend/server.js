import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import Cors from 'cors'
import Videos from './dbModel.js'

//App Config
const app = express()
const port = process.env.PORT || 9001
const connection_url = process.env.MONGODB_CONNECTION_URI

//Middeleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url)

//API Endpoitns
app.get('/', (req, res) => {
    res.send('Welcome to short video mern app')
})

app.post('/v2/posts', async (req, res) => {
    const dbVideos = new Videos(req.body)
    await dbVideos.save()
    res.status(201).json(dbVideos)
})

app.get('/v2/posts', async (req, res) => {
    const videos = await Videos.find()
    res.json(videos)
})

//Listener
app.listen(port, () => console.log(`Listenig on localhost: ${port}`))
