<<<<<<< HEAD
import dotenv from "dotenv";
=======
import dotenv from 'dotenv';
>>>>>>> 1fa32b73359c027ca8ed650e40b6c033e0f5e5ae

dotenv.config();

export default {
<<<<<<< HEAD
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://agora_admin:agora123@cluster0.xbemo.mongodb.net/AgoraMarketplace?retryWrites=true&w=majority",
};
=======
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://agora_admin:agora123@cluster0.xbemo.mongodb.net/agora?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}
>>>>>>> 1fa32b73359c027ca8ed650e40b6c033e0f5e5ae
