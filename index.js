// 뭐든지 할 때 공식문서를 보는게 좋다.

const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key');

const { User } = require('./models/User');

// application/json
app.use(express.json());

// application/x-www-form-urlencoded
// app.use(express.urlencoded({extended: true}));

// mongodb+srv://bsj:<password>@cluster0.nz8z5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안녕하세요! 새해복 많이 받으세요!'))

app.post('/register', (req, res) => {

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)
    console.log(req.body);

    // MongoDB 에서 오는 메소드 save
    user.save((err, userinfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true,
            userinfo: userinfo
        })
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))