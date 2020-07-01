const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect('mongodb+srv://felps:123@omnistack.p3k29.mongodb.net/omnistack10?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(routes)


app.listen(3333)