import mongoose from "mongoose"

const shortVideoSchema = new mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
})

const model = mongoose.model('shortVideos', shortVideoSchema)

export default model