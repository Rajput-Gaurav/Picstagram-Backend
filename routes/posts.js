// implement POST route:

const express = require("express");
const router = express.Router();

// import AUTHENTICATE Method:
const authenticate =require('../middlewares/authentication');

const postController = require("../controllers/postController");
// import postValidator:
const postsValidator = require('../controllers/validators/postValidator');

// use router.use() too apply authenticate all routes: 
router.use(authenticate)
// create a get route:
router.get("/", postController.getPosts);

// get id route:
router.get("/:id", postController.getSinglePost);
// post route:
router.post("/", [postsValidator.addPostValidator, postController.addPost]);
// delete route:
router.delete("/:id", postController.deletePost);
// put route:
router.put("/:id", postController.updatePost);

module.exports = router;
