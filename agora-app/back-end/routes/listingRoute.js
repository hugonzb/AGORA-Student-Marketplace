import express from "express";
import Listing from "../models/listingModel";

const router = express.Router();

/* GET all listing data from the database with search, category, location or student ID parameters */
router.get("/", async (req, res) => {
  const searchWord = req.query.searchWord
    ? {
        name: {
          $regex: req.query.searchWord,
          $options: "i",
        },
      }
    : {};
  const categorySortOrder = req.query.categorySortOrder
    ? {
        category: {
          $regex: req.query.categorySortOrder,
          $options: "i",
        },
      }
    : {};
  const locationSortOrder = req.query.locationSortOrder
    ? { city: req.query.locationSortOrder }
    : {};

  const sellerIdListing = req.query.sellerIdListing
    ? {
        sellerId: {
          $regex: req.query.sellerIdListing,
          $options: "i",
        },
      }
    : {};

  const listings = await Listing.find({
    ...searchWord,
    ...categorySortOrder,
    ...locationSortOrder,
    ...sellerIdListing,
  });
  res.send(listings);
});

/* GET a particular listing from the database based on the listing ID requested */
router.get("/:id", async (req, res) => {
  const listing = await Listing.findOne({ _id: req.params.id });
  if (listing) {
    res.send(listing);
  } else {
    res.status(404).send({ message: "Listing Not Found." });
  }
});

/* POST new listing data to the database */
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
    sellerEmail: req.body.sellerEmail,
    sellerProfilePicture: req.body.sellerProfilePicture,
  });
  const newListing = await listing.save();
  if (newListing) {
    res.send(newListing);
  } else {
    return res.status(401).send({ message: "could not create new listing" });
  }
});

/* DELETE a particular listing from the database based on the listing ID */
router.delete("/:id", async (req, res) => {
  const listing = await Listing.findOne({ _id: req.params.id });
  if (listing) {
    await listing.remove();
    res.send({ message: "listing has been deleted succesfully." });
  } else {
    res.send("Error in Deletion.");
  }
});

/* Update a particular listing and PUT it the database based on the listing ID */
router.put("/:id", async (req, res) => {
  const listingID = req.params.id;
  const listing = await Listing.findOne({ _id: listingID });
  if (listing) {
    listing.name = req.body.name;
    listing.description = req.body.description;
    listing.image = req.body.image;
    listing.category = req.body.category;
    listing.price = req.body.price;
    listing.brand = req.body.brand;
    listing.condition = req.body.condition;
    listing.image = req.body.image;
    const updateListing = await listing.save();
    if (updateListing) {
      return res
        .status(200)
        .send({ message: "Listing Updated", data: updateListing });
    }
  } else {
    return res.status(500).send({ message: " Error in Updating Listing." });
  }
});

export default router;
