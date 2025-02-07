import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from './routes/users.route.js'
import postRouter from './routes/posts.route.js'
import commentRouter from './routes/comments.route.js'
import cors from 'cors'
import multer from 'multer'



dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api/comment', commentRouter)

//image upload
const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, "images")
    },
    filename: (req, file, fn) => {
        fn(null, req.body.img)
        // fn(null, "image1.jpg")
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('✅ Connected to MongoDB')
    } catch (err) {
        console.log('❌ Error connecting to MongoDB:', err)
        process.exit(1)
    }
}

app.listen(process.env.PORT || 3000, () => {
    connectDB()
    console.log(`🚀 Server Listening on port ${process.env.PORT}`)
})