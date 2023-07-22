const express = require('express')
const colors = require('colors')
const morgon = require('morgan')
require('dotenv').config()


const app = express()
const PORT = 4000

app.use(express.json())
app.use(morgon('dev'))


app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Server running'
    })
})



app.listen(PORT, () => {
    console.log(`Server listing on ${'http://localhost:4000'}`.bgMagenta.white);
})