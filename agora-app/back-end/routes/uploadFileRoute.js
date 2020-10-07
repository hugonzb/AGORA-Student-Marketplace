import express from "express";
import multer from "multer";

const router = express.Router();

// Method which will give us the filename and path of an uploaded listing image
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "front-end/public/images");
    },
    filename(req, file, cb) {
        /* This line saves the file with the original name of the file + the date/time it was uploaded
            and a .jpg extension
         */
        cb(null, file.originalname.replace('.', '') + '_' +  Date.now() + ".jpg");
    },
});

const upload = multer({ storage });

router.post("/uploadimage", upload.single("image"), (req, res) => {
    // Logging info detailing where file was saved
    console.log("uploaded " + req.file.filename + " to /images/" + req.file.filename);
    res.send("/images/" + req.file.filename);
});

export default router;