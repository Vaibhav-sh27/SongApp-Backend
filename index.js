const mongoose = require('mongoose');
const db = require('./config/key').MongoURI;
const seedDB = require('./seed');
const express = require('express');
const app= express();
const router = express.Router();
const songs = require('./model/MusicDB'); // Create the Item model
var cors = require('cors');
const songsRoutes=require('./routes/songsRoutes');






mongoose.connect
(
    db
).then
(
    () => console.log('MongoDB Atlas connected...')
    // () => console.log('MongoDB Local connected...')
).catch
(
    (err) => console.log(err)
);

//seedDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(songsRoutes);



app.get("/", async (req, res) => {
    res.json({msg: "Welcome to SongAPI"});
});



let PORT=8089;
app.listen(PORT, ()=>{
    console.log(`Server connected at port ${PORT}`)
});