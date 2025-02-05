import express from 'express'
import { createPost, deletePost, getPost, getUserPost, updatePost } from '../controllers/PostController.js'

const router = express.Router()

router.post('/write', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.get('/:id', getUserPost)
router.get('/', getPost)



export default router