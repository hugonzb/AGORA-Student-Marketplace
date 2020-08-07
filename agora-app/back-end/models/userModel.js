import mongoose from 'mongoose';

// Database schema for a user
const userSchema = new mongoose.Schema({
    name:{ type: String, required: true},
});

const userModel = mongoose.model('User', userSchema);
export default userModel;