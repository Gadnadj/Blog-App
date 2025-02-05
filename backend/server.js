import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/users.route.js'


dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use('/api/user', userRouter)

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