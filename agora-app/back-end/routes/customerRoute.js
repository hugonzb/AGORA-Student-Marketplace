import express from "express";
import Customer from "../models/customerModel";

const router = express.Router();
router.get("/api/users/createaccount", async (req, res) => {
  try {
    const customer = new Customer({
      studentID: 12345,
      fname: "student",
      mname: "",
      surname: "example",
      username: "exampleUser",
      password: "12345",
      email: "exampleemail@mgmail.com",
      gender: "Male",
      university: "University of Otago",
      address: "123 example street",
      city: "Dunedin",
      postcode: "9010",
    });

    const newCustomer = await user.save();
    res.send(user);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default customerRoute;
