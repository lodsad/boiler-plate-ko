// 뭐든지 할 때 공식문서를 보는게 좋다.

const express = require('express')
const app = express()
const port = 3000

// mongodb+srv://bsj:<password>@cluster0.nz8z5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bsj:0000@cluster0.nz8z5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안녕하세요!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))