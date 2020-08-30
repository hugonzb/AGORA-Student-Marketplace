import express from 'express';
import Listing from '../models/listingModel';

const router = express.Router();

// Fetches listings from the database and posts to '/' (home page).
router.get('/', async (req, res) =>{
    try{
        const listings = await Listing.find({});
        res.send(listings);
    }catch{
        console.log('Something went wrong with fetching from the database.');
    }
});

router.get('/:id', async (req, res) => {
    const listing = await Listing.findOne({ _id: req.params.id });
    if (listing) {
      res.send(listing);
    } else {
      res.status(404).send({ message: 'Listing Not Found.' });
    }
});

export default router;