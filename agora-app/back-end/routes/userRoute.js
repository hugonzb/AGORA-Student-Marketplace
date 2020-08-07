import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.post('/signup', async (req, res) =>{
    try{
    const user = new User({
        name: req.body.name
    });
    const newUser = await user.save();
    res.send(newUser);
    }catch{
        res.send({msg:'Invalid User Data.'});
    }
})

export default router;