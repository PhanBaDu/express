// [IMPORTS]
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configs/db.connect'
// [IMPORT ROUTES]
import userRoute from './routes/user.route'

// [ENVIRONMENT VARIABLES]
dotenv.config()

// [EXPRESS APP]
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// [ROUTES]
app.use('/api/user', userRoute)

// [PORT]
const port = process.env.PORT || 3001
app.listen(port, () => {
  connectDB()
  console.log(`Server is running on port ${port}`)
})
