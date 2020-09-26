import mongoose from "mongoose";

// Database schema for a completed listing
const listingCompleteSchema = new mongoose.Schema({
  buyerStudentid:  { type: String, required: false },
  sellerStudentid:  { type: String, required: false },
  sellerName:  { type: String, required: false },
  buyerName:  { type: String, required: false },
  listingName:  { type: String, required: false },
  listingImage:  { type: String, required: false },
  listingPrice:  { type: Number, required: false },
  buyerAddress:  { type: String, required: false },
  buyerCity:  { type: String, required: false },
  buyerRegion:  { type: String, required: false },
  buyerPostcode:  { type: String, required: false },
  sellerEmail:  { type: String, required: false },
  buyerEmail:  { type: String, required: false }
},{
  timestamps: true,
},{strict: true});

const listingCompleteModel = mongoose.model("ListingComplete", listingCompleteSchema);

export default listingCompleteModel;