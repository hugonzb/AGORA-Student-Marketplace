import mongoose from "mongoose";
import { strict } from "assert";

// Database schema for a user
// Needs more fields based on the db plan on the Taiga wiki.
const userSchema = new mongoose.Schema({
  //studentID: { type: Int16Array, required: true }, //Need to fix this one i think
  fname: { type: String, required: true },
  mname: { type: String },
  sname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  //ID Photo needs to be inserted somehow too
  gender: { type: String, required: true },
  university: { type: String, required: false },
  street_address: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true },
  date_created: { type: Date, required: true }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
