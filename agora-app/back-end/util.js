import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign({
        fname: user.fname,
        email: user.email,
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
};

export { getToken } 