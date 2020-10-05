import mongoose, { Mongoose } from 'mongoose';

// DB schema for feedback submission from user:

const feedbackSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    feedback: { type: String, required: true}
},{
    timestamps: true,
},{strict: true});

const feedback = mongoose.model("Feedback", feedbackSchema);
export default feedback;