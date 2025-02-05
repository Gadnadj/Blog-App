import express from 'express'
import { createComment } from '../controllers/CommentController.js'

const router = express.Router()

router.post('/write', createComment)

export default router