"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../back-end/config.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _listingRoute = _interopRequireDefault(require("./routes/listingRoute"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongodbUrl = _config.default.MONGODB_URL;

_mongoose.default.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use("api/customers", _userRoute.default);
app.use(_bodyParser.default.json());
app.use("/api/users", _userRoute.default);
app.use(_bodyParser.default.json());
app.use("/api/listings", _listingRoute.default); 

// Here we tell the server to serve images from the front-end/public/images folder
app.use('/images', _express.default.static(_path.default.join(__dirname, '/images')));
app.use(_express.default.static(_path.default.join(__dirname, '/../front-end/build')));
app.get('*', (req, res) => {
  res.sendFile(_path.default.join(`${__dirname}/../front-end/build/index.html`));
});
/* run server on port 5000 */

app.listen(_config.default.PORT, () => {
  console.log("Backend server started at http://localhost:5000\n");
});