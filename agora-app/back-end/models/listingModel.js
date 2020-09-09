import mongoose from "mongoose";

// Database schema for a listing
const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  city: { type: String, required: true },
  university: { type: String, required: true },
  brand: { type: String, required: false },
  condition: { type: String, required: false },
  seller: { type: String, required: true },
  sellerId: { type: Number, required: true },
  deliveryoption: { type: String, required: true },
});

const listingModel = mongoose.model("Listing", listingSchema);

export default listingModel;
