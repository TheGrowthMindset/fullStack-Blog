const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth")
const userRoute  = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories");
// download multer for image uploads
const multer = require("multer")

dotenv.config();
// to allow json input
app.use(express.json());   

// mongoDB database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // UseCreateIndex: true
})
.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));


// mulster connection
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "images")
    }, 
    filename:(req, file, cb) => {
        cb(null, req.body.name);
        // change to a normal string when testing in postman becuase we cannot pass image in the body
    }
});
// uploading images using multer
const upload = multer({ storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!")
})

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("8000", ()=>{
    console.log("Backend is running");

});




