const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgon = require('morgan')
const connectDB = require('../server/config/db')
const router = require('./routes/user.routes')
require('dotenv').config()


const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(morgon('dev'))
app.use('/api/v1/user', router)
connectDB()
app.get('/', (req, res) => {
    res.send("welocome to homepage")
        .end()
})



app.listen(PORT, () => {
    console.log(`Server listing on ${`http://localhost:${PORT}`}`.bgMagenta.white);
})