import express from 'express'
import { createPost, deletePost, getPost, getUserPost, getUserPosts, updatePost } from '../controllers/PostController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/write', verifyToken, createPost)
router.get('/', getPost)
router.get('/user/:userId', verifyToken, getUserPosts)
router.put('/:id', verifyToken, updatePost)
router.delete('/:id', verifyToken, deletePost)
router.get('/:id', getUserPost)
// router.get('/search/:prompt', searchPost)



export default router