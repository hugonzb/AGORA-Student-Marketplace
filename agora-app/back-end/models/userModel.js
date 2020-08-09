import mongoose from 'mongoose';

// Database schema for a user
// Needs more fields based on the db plan on the Taiga wiki.
const userSchema = new mongoose.Schema({
    name:{ type: String, required: true }
    /*email:{type: String, required: true, unique:true},
    password:{type:String, required:true}*/
});

const userModel = mongoose.model('User', userSchema);

export default userModel;