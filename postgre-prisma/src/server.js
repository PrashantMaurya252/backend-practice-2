require('dotenv').config()

const express = require('express')
const authorRoutes = require('./routes/authorRoutes')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.use('/api/author',authorRoutes)


app.listen(PORT,()=>console.log(`Server is now running at port ${PORT}`));