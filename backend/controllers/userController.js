import User from '../models/User.js'
import Post from '../models/Post.js'
import Comment from '../models/Comment.js'
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
        const { password: userPassword, ...info } = savedUser._doc
        return res.status(200).json(info)

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

        const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: '3d' })
        const { password: userPassword, ...info } = user._doc
        return res.cookie('token', token).status(200).json(info)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//logout user
export const logoutUser = async (req, res) => {
    try {
        return res.clearCookie('token', { sameSite: 'none', secure: true }).status(200).json({ message: 'User logged Out' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Update User
export const updateUser = async (req, res) => {
    try {
        if (req.body.password) {
            const { password } = req.body
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            req.body.password = hashedPassword
        }
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        const { password: userPassword, ...info } = user._doc

        // Générer un nouveau token avec les informations mises à jour
        const token = jwt.sign(
            { _id: user._id, username: user.username, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '3d' }
        )

        // Renvoyer le nouveau token dans le cookie et les infos utilisateur
        return res
            .cookie('token', token, { httpOnly: true, secure: true })
            .status(200)
            .json(info)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Delete User
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await User.findByIdAndDelete(id)
        await Post.deleteMany({ user_id: id })
        await Comment.deleteMany({ user_id: id })
        return res.status(200).json({ message: 'User has been deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Get user
export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(401).json({ message: 'No user' })
        }
        const { password, ...info } = user._doc
        return res.status(200).json(info)


    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

//REFETCH USER
export const refetchUser = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            console.error('JWT verification error:', err);  // Log l'erreur pour la déboguer
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        return res.status(200).json(data);
    });
};