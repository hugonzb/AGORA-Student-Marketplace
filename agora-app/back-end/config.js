import dotenv from 'dotenv';

dotenv.config();

export default {
    // change the url to the public mongodb url when connecting to the db
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/agora'
}