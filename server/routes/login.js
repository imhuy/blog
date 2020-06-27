
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('./config');
const tokenList = {};
router.post('/login', (req, res) => {

    const user = {
        "email": 'huylv.dev@gmail.com',
        "name": 'huy lưu'
    }
    // Thực hiện việc kết nối cơ sở dữ liệu (hay tương tự) để kiểm tra thông tin username and password
    // Đăng nhập thành công, tạo mã token cho user
    const token = jwt.sign(user, config.secret, {
        expiresIn: config.tokenLife,
    });
    // Tạo một mã token khác - Refresh token
    const refreshToken = jwt.sign(user, config.refreshTokenSecret, {
        expiresIn: config.refreshTokenLife
    });
    // Lưu lại mã Refresh token, kèm thông tin của user để sau này sử dụng lại
    tokenList[refreshToken] = user;
    // Trả lại cho user thông tin mã token kèm theo mã Refresh token
    const response = {
        token,
        refreshToken,
    }

    console.log('huydev111')
    console.log(response)
    res.json(response);
})

module.exports = router;