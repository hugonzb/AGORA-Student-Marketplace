import mongoose from "mongoose";
import { strict } from "assert";

// Database schema for a user
const userSchema = new mongoose.Schema({
  studentid: { type: Number, required: false }, 
  fname: { type: String, required: false },
  sname: { type: String, required: false },
  username: { type: String, required: false },
  password: { type: String, required: false },
  email: { type: String, required: false }, 
  dob: { type: Date, required: false },
  gender: { type: String, required: false },
  university: { type: String, required: false },
  street_address: { type: String, required: false },
  city: { type: String, required: false },
  postcode: { type: String, required: false }
},{
  timestamps: true,
},{strict: true});

const userModel = mongoose.model("User", userSchema);

export default userModel;
