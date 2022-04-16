const router = require("express").Router();
const User = require("../models/User");
const Post  = require("../models/Post")
const bcrypt = require("bcrypt");


// UPDATE
router.put("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id){
        // if we are updating password through the request. we want it hashed as well
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
         }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {returnOriginal: false});
            // Use {new:true} or {returnOriginal: false}, to to return the document after update was applied.

            res.status(200).json(updatedUser);
         } catch (err) {
            res.status(500).json(err);
         }

        } else{
            res.status(401).json("You can only update on your Account!")
        }
});

// DELETE
router.delete("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id)
            try{
                // deleteMany deletes all documents that match the given condition. in this case. username. therefore we delteting any post where the  username  associated matches the one we just soted
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json(`User ${user.username} Deleted...`);
             } catch (err) {
                res.status(500).json(err);
             }

        } catch(err) {
            res.status(401).json("User not found!")
        }

        } else{
            res.status(401).json("You can only update on your Account!")
        }  
    });


 //  GET USER
router.get("/:id", async(req, res) => {
    try {
         const user = await User.findById(req.params.id); 
        //  we dont want to send the password when fetching user so we return oothers in the ._doc and return as a user
         const {password, ...others} = user._doc;
         res.status(200).json(others);
        //  res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
     }
    });


module.exports = router;