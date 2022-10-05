require('dotenv').config()
const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/index')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', routes)
app.use('*', (req, res) => {
    res.status(404).json({statusCode: 404,details: 'url not found'});
})

const port = process.env.PORT || 4000

mongoose.connect(process.env.DBURL, () => {
        console.log('\nDatabase connected ...')
        app.listen(port, () => {
            console.log(`listening to port ${port}`)
        })
    },
    e => console.error(e)
)
