// CREATE A ROUTE API:

const postService = require("../services/postServices");

// create a route API seperate:
// --------------GET POSTS---------------------
exports.getPosts = (req, res) => {
  postService
    .getPosts()
    .then((posts) => res.json(posts))
    .catch(() => res.status(500).json({ msg: "Something went wrong" }));
};

// ------------GET SINGLE POSTS----------------
exports.getSinglePost =
  ("/:id",
  (req, res) => {
    const { id } = req.params; //object disturing

    postService
      .getSinglePost(id)
      .then((post) => res.json(post))
      .catch(() =>
        res.status(404).json({
          msg: "Post not found",
        })
      );
  });
//   -------------ADD POSTS-------------------------
exports.addPost =
  ("/",
  (req, res) => {
    const { caption, description, imageUrl } = req.body;

    postService
      .addPost(caption, imageUrl, description)
      .then((newPost) => res.json(newPost))
      .catch(() => res.status(500).json({ msg: "Something went wrong" }));
  });

//   -------------DELETE POSTS-----------------------
exports.deletePost =
  ("/:id",
  (req, res) => {
    const { id } = req.params;
    postService
      .deletePost(id)
      .then(() => res.json({}))
      .catch(() =>
        res.status(404).json({
          msg: "Post not found.",
        })
      );
  });

//   --------------------PUT OR UPDATE POSTS----------
exports.updatePost =
  ("/:id",
  (req, res) => {
    res.send("PUT /posts/:id works!");
  });
