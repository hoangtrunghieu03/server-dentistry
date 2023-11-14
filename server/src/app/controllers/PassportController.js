const Users = require('../model/Users');
const bcrypt = require('bcrypt');

class PassportController {
    
    login(req, res, next) {
        const { email, password} = req.body;
      
        Users.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.status(500).json('Lỗi máy chủ nội bộ');
                    } else if (result) {
                        return res.json(user);
                    } else {
                        res.status(401).json('Tài khoản hoặc mật khẩu không hợp lệ');
                    }
                });
            } else {
                res.status(401).json('Tài khoản hoặc mật khẩu không hợp lệ');
            }
        })
        .catch(error => {
            res.status(500).json('Lỗi máy chủ nội bộ');
        });
    }

    register(req, res, next) {
        const { name, email, password, tell, status } = req.body;

        Users.findOne({
            email: email
        })
        .then(data => {
            if (data) {
                res.status(400).json('Tài khoản đã tồn tại');
            } else {
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    res.status(500).json('Lỗi mã hóa mật khẩu');
                } else {
                    Users.create({
                        name: name,
                        email: email,
                        password: hashedPassword,
                        tell: tell,
                        status: status || 'user',
                    })
                    .then(user => {
                        return res.json(user);
                    })
                    .catch(err => {
                        res.status(500).json('Tạo tài khoản không thành công');
                    });
                } });
            }
        })
        .catch(err => {
            res.status(500).json('Lỗi xảy ra khi kiểm tra tài khoản');
        });
    }
}

module.exports = new PassportController();
