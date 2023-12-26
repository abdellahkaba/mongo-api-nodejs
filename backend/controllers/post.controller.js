const Post = require("../models/post.model")
const post = require("../models/post.model")

//Une fonction de la request post
module.exports.setPosts = async (req,res) => {


    
    if(!req.body.message){
        res.status(400).json({message: 'Veuillez ajouter un contenu'})
    }

    const post = await Post.create({
        message: req.body.message,
        author: req.body.author
    })
 
    res.status(200).json(post)
}

//Une fonction de la requete get

module.exports.getPost = async (req,res) => {
    try {
        const allPost = await Post.find({})
        res.status(200).json(allPost)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Une fontion de la recherche d'un post
module.exports.getOnePost = async (req,res) => {
    try {
        const {id} = req.params
        const onePost = await Post.findById(id)
        res.status(200).json(onePost)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Une fonction edit Post
module.exports.editUpdatePost = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        const post = await Post.findById(id)
        const updatePost = await Post.findByIdAndUpdate(post,body,{new: true})
        res.status(200).json(updatePost)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//fonction deletePost

module.exports.deletePost = async (req,res) => {

    try {
        // const id = req.params.id
        const postId = await Post.findById(req.params.id)
        if(!postId){
            res.status(400).json({message: "Information non trouvée"})
        }
       await postId.remove();
       res.status(200).json(`Post ID ${id}` + " supprimé")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}