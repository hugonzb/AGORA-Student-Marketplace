import express from 'express';

const app = express();

app.get("/api/listings", (req, res) => {
    res.send(data.listings);
});

/* run server on port 5000 */
app.listen(5000, () => {console.log("Server started at http://localhost:5000")});