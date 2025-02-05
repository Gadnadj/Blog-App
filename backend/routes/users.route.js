import express from 'express'
import { deleteUser, getUser, loginUser, logoutUser, registerUser, updateUser } from '../controllers/userController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', verifyToken, logoutUser)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getUser)


export default router