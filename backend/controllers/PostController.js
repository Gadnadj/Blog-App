import Post from '../models/Post.js'
import Comment from '../models/Comment.js'

//Create a post
export const createPost = async (req, res) => {
    try {
        console.log('received body', req.body)
        const { title, desc, photo, username, user_id, categories } = req.body
        if (!title) {
            return res.status(401).json({ message: 'Please provide a title' })
        }
        else if (!desc) {
            return res.status(401).json({ message: 'Please provide a description' })
        }
        if (!username) {
            return res.status(400).json({ message: 'Please provide a username' });
        }
        if (!user_id) {
            return res.status(400).json({ message: 'Please provide a user_id' });
        }

        const post = new Post({ title, desc, photo, username, user_id, categories })
        const savedPost = await post.save()
        return res.status(200).json(savedPost)

    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ message: error.message })

    }
}


//Update User
export const updatePost = async (req, res) => {

    try {
        const id = req.params.id
        const updatedPost = await Post.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        return res.status(200).json(updatedPost)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

//Delete User
export const deletePost = async (req, res) => {
    try {
        const id = req.params.id
        await Post.findByIdAndDelete(id)
        await Comment.deleteMany({ post_id: req.params.id })
        return res.status(200).json({ message: 'Post has been deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Get all post
export const getPost = async (req, res) => {
    try {
        const query = req.query
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        }
        const posts = await Post.find(query.search ? searchFilter : null)
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Get user post
export const getUserPost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findById(id)
        return res.status(200).json(post)


    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

