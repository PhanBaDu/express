// [IMPORTS]
import express from 'express'
import dotenv from 'dotenv'
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
  console.log(`Server is running on port ${port}`)
})
