import mongoose from 'mongoose';

// Database schema for a listing
const listingSchema = new mongoose.Schema({
    name:{ type: String, required: true }
});

const listingModel = mongoose.model('Listing', listingSchema);

export default listingModel;