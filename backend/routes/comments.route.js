import express from 'express'
import { createComment, deleteComment, getComments, updateComment } from '../controllers/CommentController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/write', verifyToken, createComment)
router.put('/:id', verifyToken, updateComment)
router.delete('/:id', verifyToken, deleteComment)
router.get('/post/:postId', getComments)

export default router