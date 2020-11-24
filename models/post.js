const mongoose = require("mongoose");

// create a Schema or Structure of data:
const PostSchema = new mongoose.Schema(
  {
    caption: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// create a model:
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

// create a model:
// class Post {
//   constructor(id, caption, imageUrl, description = "") {
//     this.id = id;
//     this.caption = caption;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.active = true;
//     this.date = new Date();
//   }
// }
// export the class:
// module.exports = Post;
