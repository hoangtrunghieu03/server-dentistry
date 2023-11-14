const Users = require('../model/Users');
const Appointment = require('../model/appointment');

class UserController {
    appointment(req, res, next) {
        const id_user = req.params.id_user;
        const { date, content, service } = req.body;

        // Sử dụng Promise
        Appointment.create({
            id_user: id_user,
            date: date,
            content: content,
            service: service,
        })
        .then(appointment => {
            return res.status(201).json('Tạo lịch hẹn thành công.');
        })
        .catch(err => {
            return res.status(500).json('Tạo lịch hẹn không thành công.');
        });
    }

    list_appointment(req, res, next) {
        const id_user = req.params.id_user;
    
        Appointment.findOne({ id_user: id_user })
        .then(appointment => {
            if (appointment) {
                Users.findOne({ _id: id_user })
                    .then(user => {
                        if (user) {
                            return res.json({ user, appointment });
                        } else {
                            return res.status(401).json('Không có tài khoản');
                        }
                    })
                    .catch(err => {
                        return res.status(401).json('Không có tài khoản');
                    });
            } else {
                return res.status(401).json('ID param không hợp lệ');
            }
        })
        .catch(err => {
            return res.status(401).json('Không có lịch hẹn');
        });
    }
    
}

module.exports = new UserController();
