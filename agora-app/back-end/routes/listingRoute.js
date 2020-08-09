import express from 'express';
import Listing from '../models/listingModel';

const router = express.Router();

router.get('/', async (req, res) =>{
    try{
        const listings = await Listing.find({});
        res.send(listings);
    }catch{
        res.send({msg:'Listings failed to get fetched.'});
        console.log('Something went wrong with fetching from the database.');
    }
});

export default router;