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

router.post("/get_song", async (req, res) => {
    try {
        console.log(req.body);
        let {id}=req.body;
        const song = await songs.findById(id);
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
        // res.status(200).json({ msg: "Successfully added song" });
      }
      catch (err) {
          res.status(400).json({ msg: err })
      }
  })

  router.patch("/inc_time" , async(req,res)=>{
    try {
        console.log(req.body);
        let {id}=req.body;
        let {timesPlayed} = await songs.findById(id);
        const patch= await songs.findByIdAndUpdate(id, {timesPlayed:timesPlayed+1});

        // const song = new songs(req.body);
        // const post = await song.save();
        if (!patch) throw Error('Something went wrong while increasing times played');
        res.status(200).json({ data: patch, msg: "Successfully increased times played" });
        // res.status(200).json({ msg: "Successfully added song" });
      }
      catch (err) {
          res.status(400).json({ msg: err })
      }
  })

  router.patch("/edit_song" , async(req,res)=>{
    try {
        console.log(req.body);
        let {id, name, author_name, img, lang, timesPlayed, type, musicName}=req.body;
        // let {timesPlayed} = await songs.findById(id);
        const patch= await songs.findByIdAndUpdate(id, {
            name: name,
            author_name: author_name,
            img: img,
            lang: lang,
            timesPlayed: timesPlayed,
            type: type,
            musicName: musicName,
            attribution:{
                song: name,
                musicBy: author_name,
                download: null,
                stream: null
            }});

        // const song = new songs(req.body);
        // const post = await song.save();
        if (!patch) throw Error('Something went wrong while increasing times played');
        res.status(200).json({ data: patch, msg: "Successfully increased times played" });
        // res.status(200).json({ msg: "Successfully added song" });
      }
      catch (err) {
          res.status(400).json({ msg: err })
      }
  })

  router.delete("/dlt_song" , async(req,res)=>{
    try {
        console.log(req.body);
        let {id}=req.body;
        const dlt= await songs.findByIdAndDelete(id);
        console.log("dltttttt");
        // const song = new songs(req.body);
        // const post = await song.save();
        if (!dlt) throw Error('Something went wrong while deleting song data');
        res.status(200).json({ data: patch, msg: "Successfully deleted song data" });
        // res.status(200).json({ msg: "Successfully added song" });
      }
      catch (err) {
          res.status(400).json({ msg: err })
      }
  })



module.exports = router;