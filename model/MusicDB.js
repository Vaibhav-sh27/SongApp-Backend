const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

let musicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    author_name:{
        type: String,
        required: true,
        trim:true
    },
    img:{
        type: String,
        trim:true
    },
    lang:{
        type: String,
        trim:true
    },
    timesPlayed:{
        type: Number,
        min:0,
        required:true
    },
    type:{
        type: String,
        trim:true
    },
    musicName:{
        type: String,
        trim:true
    },
    attribution:{
        song:{
            type: String,
            trim:true
        },
        musicBy:{
            type: String,
            trim:true
        },
        download:{
            type: String,
            trim:true
        },
        stream:{
            type: String,
            trim:true
        }
    }

});

let MusicDB = mongoose.model('MusicDB', musicSchema);
module.exports = MusicDB;