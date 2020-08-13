import express from 'express';
import config from '../back-end/config.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import listingRoute from './routes/listingRoute';

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use("/api/users/", userRoute);
app.use("/api/listings", listingRoute);

/* run server on port 5000 */
app.listen(5000, () => {console.log("Backend server started at http://localhost:5000\n")});