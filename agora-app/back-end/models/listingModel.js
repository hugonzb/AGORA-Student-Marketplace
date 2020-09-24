import mongoose from "mongoose";

// Database schema for a listing
const listingSchema = new mongoose.Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  category: { type: String, required: false },
  price: { type: Number, required: false },
  city: { type: String, required: false },
  university: { type: String, required: false },
  brand: { type: String, required: false },
  condition: { type: String, required: false },
  seller: { type: String, required: false },
  sellerEmail: { type: String, required: false },
  sellerId: { type: String, required: false },
  sellerProfilePicture: { type: String, required: false }
});

const listingModel = mongoose.model("Listing", listingSchema);

export default listingModel;
