import dotenv from 'dotenv';

dotenv.config(); 

export default {
  PORT: process.env.PORT || 5000, 
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://agora_admin:agora123@cluster0.xbemo.mongodb.net/agora?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "jwtsecrettoken",
};
