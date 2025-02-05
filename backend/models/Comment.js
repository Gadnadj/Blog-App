import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    author: { type: String, required: true },
    post_id: { type: String, required: true },
    user_id: { type: String, required: true },

}, {
    timestamps: true
})

export default mongoose.model('comment', CommentSchema)