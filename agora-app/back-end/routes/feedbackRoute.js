import express from 'express';
import feedback from '../models/feedbackModel';

const router = express.Router();

/* POST feedback data to the database */
router.post("/send", async (req, res) => {
    const feedbackObj = new feedback({
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback
    });
    const feedbackComplete = await feedbackObj.save();
    if(feedbackComplete) {
        res.send(feedbackComplete);
    }else{
        return res.status(401).send({message: "could not save feedback"});
    }
});

export default router;
