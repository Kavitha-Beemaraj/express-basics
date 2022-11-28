const express = require('express');
const app = express ();
app.use(express.urlencoded({ extender: true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(logger)

const userRouer= require('./routes/users')

app.use('/users', userRouer)

function logger(req,res,nexr){
    console.log(req.originalUrl)
}
app.listen(3000)
