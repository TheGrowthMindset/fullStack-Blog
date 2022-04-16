const router = require("express").Router();
const User = require("../models/User");
const Post  = require("../models/Post")


// CREATE POST
router.post("/", async (req, res)=>{
   const newPost = new Post(req.body);
   try {
         const savedPost = await newPost.save();
         res.status(200).json(savedPost);
   } catch (err){
       res.status(500).json(err)
   }
});

// UPDATE POST
router.put("/:id", async (req, res)=>{
    try {
         const post = await Post.findById(req.params.id);
         if(post.username === req.body.username) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {       
                    $set: req.body
                }, 
                {returnOriginal:false}
                );
                res.status(200).json(updatedPost);
            }  catch(err) {
                res.status(500).json(err);
             }
         } else {
                res.status(401).json("You can only update your posts!")
         }

    } catch (err) {
        res.status(500).json(err)
    }
    });


 //  DELETE POST 
 router.delete("/:id", async (req, res)=>{
    try {
         const post = await Post.findById(req.params.id);
         if(post.username === req.body.username) {

            try {
                // we can delete directly by using the post
                await post.delete();
                res.status(200).json("Post Deleted!...");
            }  catch(err) {
                res.status(500).json(err);
             }
         } else {
                res.status(401).json("You can only Delete your posts!")
         }

    } catch (err) {
        res.status(500).json(err)
    }
    });

//  GET A POST
router.get("/:id", async(req, res) => {
    try {
         const post = await Post.findById(req.params.id); 
         res.status(200).json(post);
        //  res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
     }
    });


//  GET ALL POST
router.get("/", async(req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
         let posts;
         if(username) {
             posts = await Post.find({username: username})
         } else if(catName){
            //  line 87 is taking a look at categories and checking if catName exist and assign it to posts
             posts = await post.find({categories: {$in: [catName]}})
         } else {
             posts = await Post.find();
         }
         res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err)
     }
    });


module.exports = router;