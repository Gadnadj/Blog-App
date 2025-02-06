import express from 'express'
import { deleteUser, getUser, loginUser, logoutUser, refetchUser, registerUser, updateUser } from '../controllers/userController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', verifyToken, logoutUser)
router.get('/refetch', refetchUser)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getUser)

export default router