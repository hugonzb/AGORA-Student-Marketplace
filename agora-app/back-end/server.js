import express from 'express';
import data from './data.js';
import config from '../back-end/config.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

/*dotenv.config(); Don't need it, it is already in the config.js*/

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use("/api/users", userRoute);
app.get("/api/listings", (req, res) => {
    res.send(data.listings);
});

/* run server on port 5000 */
app.listen(5000, () => {console.log("Server started at http://localhost:5000\nListing data is stored on: http://localhost:5000/api/listings")});