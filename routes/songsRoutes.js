const express = require('express');
const router = express.Router();
const songs = require('../model/MusicDB');


router.get("/songs", async (req, res) => {
    try {
        const song = await songs.find();
        res.json(song);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


router.post("/songs" , async(req,res)=>{
    try {
        console.log(req.body);
        const song = new songs(req.body);
        const post = await song.save();
        if (!post) throw Error('Something went wrong while adding song');
        res.status(200).json({ data: post, msg: "Successfully added song" });
        res.status(200).json({ msg: "Successfully added song" });
      }
      catch (err) {
          res.status(400).json({ msg: err })
      }
  })



module.exports = router;