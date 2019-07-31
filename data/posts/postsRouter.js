const express = require("express");
const posts = require("../db");
const router = express.Router();

//Server.Get posts
router.get("/", (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json({
        success: true,
        posts
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: "The posts information could not be retrieved",
        err
      });
    });
});

//Server.Get post:id
router.get("/:id/comments", async (req, res) => {
  const post_id = req.params.id;

  const post = await Posts.findById(post_id);

  if (post.length === 0) {
    res.status(404).json({
      success: false,
      errorMessage: "The post with the specificed ID does not exist."
    });
  } else {
    Posts.findPostComments(post_id)
      .then(comments => {
        res.status(200).json({
          success: true,
          comments
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          errorMessage: "The comments information could not be retrieved",
          err
        });
      });
  }
});

//Server.post
router.post("/", (req, res) => {});

//Server.post comments
router.post("/:id/comments", (req, res) => {});

//Server.put posts with id
router.put("/:id", (req, res) => {});

//Server.delete posts
router.delete("/:id", (req, res) => {});

module.exports = router;
