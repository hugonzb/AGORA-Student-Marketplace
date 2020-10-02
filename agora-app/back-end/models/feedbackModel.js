import mongoose, { Mongoose } from 'mongoose';

// DB schema for feedback submission from user:

const feedbackSchema = new mongoose.Schema({
    name: {type: String, required: false},
    email: { type: String, required: false},
    feedback: { type: String, required: false}
},{
    timestamps: true,
},{strict: true});

const feedback = mongoose.model("Feedback", feedbackSchema);
export default feedback;