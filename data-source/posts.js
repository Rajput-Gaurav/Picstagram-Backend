// create a array of data:

// importg post:
const Post = require("../models/post");

// TODO: This has to come from a DB
module.exports = [
  new Post(
    1,
    "Nature",
    "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ),
  new Post(
    2,
    "Coding",
    "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ),
  new Post(
    3,
    "Movies",
    "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ),
  new Post(
    4,
    "Cricket",
    "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ),
  new Post(
    5,
    "Test",
    "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ),
];
