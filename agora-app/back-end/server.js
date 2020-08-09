import express from "express";
import data from "./data.js";
import config from "./config";
import bodyParser from "bodyParser";
import mongoose from "mongoose";
import customerRoute from "./routes/customerRoute";

/* the following is part of the database connection */
const mongodburl = config.MONGODB_URL;
mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("api/customers", customerRoute);

app.get("/api/listings", (req, res) => {
  res.send(data.listings);
});

/* run server on port 5000 */
app.listen(config.PORT, () => {
  console.log(
    "Server started at http://localhost:5000\nListings are on page: http://localhost:5000/api/listings"
  );
});
