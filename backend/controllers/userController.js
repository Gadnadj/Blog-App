import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//register user
export const registerUser = async (req, res) => {

    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please fill everything' })

        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'There is already an user with this email' })

        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Please provide a password of min 6 characters' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ username, email, password: hashedPassword })
        const savedUser = await newUser.save()
        return res.status(200).json(savedUser)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}






//login user
export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(404).json({ message: 'Please fill all the field' })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(401).json({ message: 'Wrong password' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' })
        const { password: userPassword, ...info } = user._doc
        res.cookie('token', token).status(200).json(info)

        return res.status(200).json(user)


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}




//logout user
export const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token', { sameSite: 'none', secure: true }).status(200).json({ message: 'User logged Out' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
