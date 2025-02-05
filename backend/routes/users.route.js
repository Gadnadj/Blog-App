import express from 'express'
import { deleteUser, getUser, loginUser, logoutUser, registerUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)


export default router