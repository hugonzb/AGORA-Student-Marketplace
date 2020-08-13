import mongoose from "mongoose";
import { strict } from "assert";

// Database schema for a user
// Needs more fields based on the db plan on the Taiga wiki.
const userSchema = new mongoose.Schema({
  studentid: { type: Number, required: true }, 
  fname: { type: String, required: true },
  sname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  university: { type: String, required: true },
  street_address: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true }
},{
  timestamps: true,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
