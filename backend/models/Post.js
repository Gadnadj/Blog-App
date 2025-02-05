//title
//desc
//photo
//username
//user_id
//categories
import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    photo: { type: String, required: false },
    username: { type: String, required: true },
    user_id: { type: String, required: true },
    categories: { type: Array, required: false }
}, {
    timestamps: true
})

export default mongoose.model('post', PostSchema)