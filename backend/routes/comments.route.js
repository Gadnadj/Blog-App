import express from 'express'
import { createComment, deleteComment, getComments, updateComment } from '../controllers/CommentController.js'

const router = express.Router()

router.post('/write', createComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)
router.get('/post/:postId', getComments)

export default router