import express from 'express'
import { createPost, deletePost, getPost, getUserPost, updatePost } from '../controllers/PostController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/write', verifyToken, createPost)
router.put('/:id', verifyToken, updatePost)
router.delete('/:id', verifyToken, deletePost)
router.get('/:id', getUserPost)
router.get('/', getPost)
// router.get('/search/:prompt', searchPost)



export default router