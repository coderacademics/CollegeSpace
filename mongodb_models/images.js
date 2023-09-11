const mongoose = require('mongoose')
const { Schema } = mongoose;


const imageSchema = new mongoose.Schema({
    caption:{
        type: String,
        require: true
    },
    image:{
        name: String,
        contentType: String
    }
},
{
    collection: "ImageDB"
});

module.exports = imageSchema;