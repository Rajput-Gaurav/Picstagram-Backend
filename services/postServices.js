// data of services:
const Post = require("../models/post");
// const posts = require("../routes/data-source/posts");

// use Promise:
exports.getPosts = () => {
  return Post.find();
};

exports.addPost = (caption, imageUrl, description) => {
  // create a instance of Post model:
  const post = new Post();

  post.caption = caption;
  post.imageUrl = imageUrl;
  post.description = description;

  return post.save();
  // const newId = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
  // // create a new post:
  // const newPost = new Post(newId, caption, imageUrl, description);
  // // push the post:
  // posts.push(newPost);
  // return new Promise((resolve) => resolve(newPost));
};

exports.getSinglePost = (id) => {
  return Post.findById(id);
  // let post = null;

  // for (let i in posts) {
  //   if (posts[i].id == id) {
  //     post = posts[i];
  //     break;
  //   }
  // }
  // return new Promise((resolve, reject) => {
  //   if (post) {
  //     resolve(post);
  //   } else {
  //     reject();
  //   }
  // });
};

exports.updatePost = () => {};

exports.deletePost = (id) => {
  return Post.findByIdAndDelete(id);
  // let index = -1;

  // for (let i in posts) {
  //   if (posts[i].id == id) {
  //     index = i;
  //     break;
  //   }
  // }

  // return new Promise((resolve, reject) => {
  //   if (index > -1) {
  //     const post = posts.splice(index, 1);
  //     resolve(post);
  //   } else {
  //     reject();
  //   }
  // });
};
