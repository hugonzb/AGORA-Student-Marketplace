import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  studentID: { Type: int, required: true },
  fname: { Type: String, required: true },
  mname: { Type: String, required: false },
  surname: { Type: String, required: true },
  username: { Type: String, required: true, unique: true },
  password: { Type: String, required: true },
  email: { Type: String, required: true, unique: true },
  gender: { Type: String, required: true, unique: true },
  university: { Type: String, required: true },
  address: { Type: String, required: true },
  city: { Type: String, required: true },
  postcode: { Type: String, required: false },
});

const customerModel = mongoose.model("Customer", customerSchema);

export default customerModel;
