import express from "express";
import Listing from "../models/listingModel";

const router = express.Router();

// Fetches listings from the database and posts to '/' (home page).
router.get('/', async (req, res) =>{
  const searchWord = req.query.searchWord ? { 
    name: {
      $regex: req.query.searchWord, 
      $options: 'i',
    },
  } : {}; 
  const categorySortOrder = req.query.categorySortOrder ? { 
    category: { 
      $regex: req.query.categorySortOrder,
      $options: 'i',
    },
  } : {};
  const locationSortOrder = req.query.locationSortOrder ? { location: req.query.locationSortOrder } : {};
  const listings = await Listing.find({...searchWord, ...categorySortOrder, ...locationSortOrder});
  res.send(listings); 
}); 

router.get("/:id", async (req, res) => {
  const listing = await Listing.findOne({ _id: req.params.id });
  if (listing) {
    res.send(listing);
  } else {
    res.status(404).send({ message: "Listing Not Found." });
  }
});

// Hope it's ok to make the post uri to /listing/create
router.post("/create", async (req, res) => {
  const listing = new Listing({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    city: req.body.city,
    university: req.body.university,
    brand: req.body.brand,
    condition: req.body.condition,
    seller: req.body.seller,
    sellerId: req.body.sellerId,
    deliveryoption: req.body.deliveryoption,
  });
  const newListing = await listing.save();
  if (newListing) {
    res.send(newListing);
  } else {
    return res.status(401).send({ message: "could not create new listing" });
  }
});

export default router;
