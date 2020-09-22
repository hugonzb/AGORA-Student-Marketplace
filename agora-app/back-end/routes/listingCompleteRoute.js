import express from "express";
import ListingComplete from "../models/listingCompleteModel";

const router = express.Router();

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