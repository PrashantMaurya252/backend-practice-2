require('dotenv').config()
const express = require('express');
const cors = require('cors')
const {configureCors}  = require('./config/corsConfig.js')
const {addTimeStamps,requestLogger} = require('./middleware/customMiddlewares.js')
const {globalErrorhandler} = require('./middleware/errorHandler.js')
const {urlVersioning} =require('./middleware/apiVersioning.js')

const app = express();
const PORT = process.env.PORT || 3000



// express json middleware
app.use(addTimeStamps)
app.use(requestLogger)

app.use(configureCors())
app.use(express.json())
app.use('/api/v1',urlVersioning('v1'))
app.use(globalErrorhandler)

app.listen(PORT,()=>{
    console.log(`Server is now running on port ${PORT}`)
})