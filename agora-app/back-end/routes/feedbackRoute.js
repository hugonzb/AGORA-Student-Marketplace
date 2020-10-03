import express from 'express';
import feedback from '../models/feedbackModel';

const router = express.Router();

router.post("/send", async (req, res) => {
    const feedbackObj = new feedback({
        fbName: req.body.name,
        fbEmail: req.body.email,
        fbFeedback: req.body.feedback
    });
    const feedbackComplete = await feedbackObj.save();
    if(feedbackComplete) {
        res.send(feedbackComplete);
    }else{
        return res.status(401).send({message: "could not save feedback"});
    }
});

export default router;
