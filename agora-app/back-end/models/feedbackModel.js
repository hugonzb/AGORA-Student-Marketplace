import mongoose, { Mongoose } from 'mongoose';

// DB schema for feedback submission from user:

const feedbackSchema = new mongoose.Schema({
    userID: {type: String, required: false},
    
},{
    timestamps: true,
},{strict: true});