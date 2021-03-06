"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _listingModel = _interopRequireDefault(require("../models/listingModel"));

var _zlib = require("zlib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // Fetches listings from the database and posts to '/' (home page).


router.get("/", async (req, res) => {
  const searchWord = req.query.searchWord ? {
    name: {
      $regex: req.query.searchWord,
      $options: "i"
    }
  } : {};
  const categorySortOrder = req.query.categorySortOrder ? {
    category: {
      $regex: req.query.categorySortOrder,
      $options: "i"
    }
  } : {};
  const locationSortOrder = req.query.locationSortOrder ? {
    city: req.query.locationSortOrder
  } : {};
  const sellerIdListing = req.query.sellerIdListing ? {
    sellerId: {
      $regex: req.query.sellerIdListing,
      $options: "i"
    }
  } : {};
  const listings = await _listingModel.default.find({ ...searchWord,
    ...categorySortOrder,
    ...locationSortOrder,
    ...sellerIdListing
  });
  res.send(listings);
});
router.get("/:id", async (req, res) => {
  const listing = await _listingModel.default.findOne({
    _id: req.params.id
  });

  if (listing) {
    res.send(listing);
  } else {
    res.status(404).send({
      message: "Listing Not Found."
    });
  }
}); //get user listings on profile

router.get("/account/profile"), async (req, res) => {
  const seller = req.query.seller ? {
    seller: {
      $regex: "Hugo Baird",
      $options: "i"
    }
  } : {};
  const listings = await _listingModel.default.find({ ...seller
  });

  if (listings) {
    res.send(listings);
  } else {
    res.status(404).send({
      message: "User Listings not found."
    });
  }
}; // Method which will give us the filename and path of an uploaded image

const storage = _multer.default.diskStorage({
  destination(req, file, cb) {
    cb(null, 'front-end/public/images');
  },

  filename(req, file, cb) {
    cb(null, Date.now() + ".jpg");
  }

});

const upload = (0, _multer.default)({
  storage
});
router.post('/uploadimage', upload.single('image'), (req, res) => {
  console.log(req.file.filename);
  res.send("/images/" + req.file.filename);
}); // Hope it's ok to make the post uri to /listing/create

router.post("/create", async (req, res) => {
  const listing = new _listingModel.default({
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
    deliveryoption: req.body.deliveryoption
  });
  const newListing = await listing.save();

  if (newListing) {
    res.send(newListing);
  } else {
    return res.status(401).send({
      message: "could not create new listing"
    });
  }
}); //delete listing router

router.delete("/:id", async (req, res) => {
  const listing = await _listingModel.default.findOne({
    _id: req.params.id
  });

  if (listing) {
    await listing.remove();
    res.send({
      message: "listing has been deleted succesfully."
    });
  } else {
    res.send('Error in Deletion.');
  }
});
var _default = router;
exports.default = _default;