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
        console.log('Something went wrong with saving user sign up data to the database');
    }
});

export default router;