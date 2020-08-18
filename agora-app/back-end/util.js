import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign({
        studentid: user.studentid,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
};

export { getToken } 