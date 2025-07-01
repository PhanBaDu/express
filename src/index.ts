// [IMPORTS]
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configs/db.connect'
// [IMPORT ROUTES]
import testRoute from './routes/test.route'

// [ENVIRONMENT VARIABLES]
dotenv.config()

// [EXPRESS APP]
const app = express()

// [ROUTES]
app.use('/api/test', testRoute)

// [PORT]
const port = process.env.PORT || 3001
app.listen(port, () => {
  connectDB()
  console.log(`Server is running on port ${port}`)
})
