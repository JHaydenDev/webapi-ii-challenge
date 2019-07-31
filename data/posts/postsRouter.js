const express = require("express");
const posts = require("../db");
const router = express.Router();

//Server.Get posts
router.get("/", (req, res) => {
 
});

//Server.Get post:id
router.get("/:id", (req, res) => {
 
});;

//Server.Get comments
router.get("/:id/comments", (req, res) => {
 
});

//Server.post
router.post("/", (req, res) => {
 
});

//Server.post comments
router.post("/:id/comments", (req, res) => {
 
});

//Server.put posts with id
router.put("/:id", (req, res) => {
});

//Server.delete posts
router.delete("/:id", (req, res) => {

});

module.exports = router;