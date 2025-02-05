import Comment from '../models/Comment.js'

//Create a comment
export const createComment = async (req, res) => {
    try {
        const { comment, author, post_id, user_id } = req.body
        if (!comment) {
            return res.status(401).json({ message: 'Add a comment' })
        }
        const newComment = new Comment({ comment, author, post_id, user_id })
        const savedComment = await newComment.save()
        return res.status(200).json(savedComment)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//Update a comment
export const updateComment = async (req, res) => {
    try {
        const id = req.params.id
        const updatedComment = await Comment.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        return res.status(200).json(updatedComment)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//Delete a comment
export const deleteComment = async (req, res) => {
    try {
        const id = req.params.id
        await Comment.findByIdAndDelete(id)
        return res.status(200).json({ message: 'comment deleted successfully' })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//Get all comments
export const getComments = async (req, res) => {
    try {
        const post_id = req.params.id
        const comments = await Comment.find(post_id)
        return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}