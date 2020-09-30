import mongoose, { Mongoose } from 'mongoose';

// DB schema for feedback submission from user:

const feedbackSchema = new mongoose.Schema({
    name: {type: String, required: false},
    email: { type: String, required: false},
    feedback: { type: String, required: true}
},{
    timestamps: true,
},{strict: true});

const feedbackModel = mongoose.model("Feedback", feedbackSchema);
export default feedbackModel;