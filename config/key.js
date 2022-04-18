
// 환경변수가 development(로컬) / production(배포후) 이면은? 
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}