const mongoose = require("mongoose")

const PostModel = mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    likers: {
        type: [String],

    },
},
{
    timestamps: true
}
)

//on initialise le model dans une constante

const Post = mongoose.model("post",PostModel)
module.exports = Post
// module.exports =  mongoose.model("post",PostModel)
