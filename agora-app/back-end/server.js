import express from "express";
import config from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import listingRoute from "./routes/listingRoute";
import listingCompleteRoute from "./routes/listingCompleteRoute";
import uploadFileRoute from "./routes/uploadFileRoute";
import feedbackRoute from "./routes/feedbackRoute";
import bodyParser from "body-parser";
import path from "path";


const mongodbUrl = config.MONGODB_URL;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("api/customers", userRoute);
app.use("/api/users", userRoute);
app.use("/api/listings", listingRoute);
app.use("/api/listingsComplete", listingCompleteRoute);
app.use("/api/fileUpload", uploadFileRoute);
app.use("/api/feedback", feedbackRoute);


/* Here we tell the server to serve images from the front-end/public/ image folders. */
app.use('/images', express.static(path.join(__dirname, '/../front-end/public/images')));
app.use('/profilePictures', express.static(path.join(__dirname, '/../front-end/public/profilePictures')));

/* Use the front-end build folder to host all index pages */
app.use(express.static(path.join(__dirname, '/../front-end/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../front-end/build/index.html`));
});

/* Run server using the configured port (Heroku port or localhost/port 5000) */
app.listen(config.PORT, () => {
  console.log("Backend server started at http://localhost:5000\n");
});