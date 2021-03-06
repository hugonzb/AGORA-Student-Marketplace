import mongoose from "mongoose";

// Database schema for a user

const userSchema = new mongoose.Schema(
  {
    studentid: { type: Number, required: true },
    fname: { type: String, required: true },
    sname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    region: { type: String, required: true },
    gender: { type: String, required: false },
    university: { type: String, required: true },
    street_address: { type: String, required: true },
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    profilePicture: { type: String, required: true },
  },
  {
    timestamps: true,
  },
  { strict: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
