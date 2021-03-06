import express from "express";
import ListingComplete from "../models/listingCompleteModel";

const router = express.Router();

/* GET all sold listing data from the database based on the user's student ID */
router.get("/sold", async (req, res) => {
  const sellerid = req.query.sellerid
    ? { sellerStudentid: req.query.sellerid }
    : {};

  const listingCompletes = await ListingComplete.find({
    ...sellerid,
  });
  res.send(listingCompletes);
});

/* GET all purchased listing data from the database based on the user's student ID */
router.get("/purchased", async (req, res) => {
  const buyerid = req.query.buyerid
    ? { buyerStudentid: req.query.buyerid }
    : {};

  const listingPurchasedCompletes = await ListingComplete.find({
    ...buyerid,
  });
  res.send(listingPurchasedCompletes);
});

/* POST purchase data to the database once a user completes a purchase */
router.post("/create", async (req, res) => {
    const listingComplete = new ListingComplete({
        buyerStudentid: req.body.buyerStudentid,
        sellerStudentid: req.body.sellerStudentid,
        sellerName: req.body.sellerName,
        buyerName: req.body.buyerName,
        listingName: req.body.listingName,
        listingImage: req.body.listingImage,
        listingPrice: req.body.listingPrice,
        buyerAddress: req.body.buyerAddress,
        buyerCity: req.body.buyerCity,
        buyerRegion: req.body.buyerRegion,
        buyerPostcode: req.body.buyerPostcode,
        sellerEmail: req.body.sellerEmail,
        buyerEmail: req.body.buyerEmail
    });
    const newListingComplete = await listingComplete.save();
    if (newListingComplete) {
      res.send(newListingComplete);
    } else {
      return res.status(401).send({ message: "could not create new listing" });
    }
});

export default router;