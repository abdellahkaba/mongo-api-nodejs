const express = require("express");
const { setPosts, getPost, getOnePost, editUpdatePost, deletePost } = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getPost)

router.post("/", setPosts)

router.get("/:id", getOnePost)

router.put("/:id", editUpdatePost)

router.delete("/:id", deletePost)

router.patch("/like-post/:id", (req,res) => {
    res.json({message: "Post liké : id : " + req.params.id});
})
 
module.exports = router