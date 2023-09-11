const mongoose = require('mongoose')
const { Schema } = mongoose;


const questionpaperSchema = new mongoose.Schema({
    Semester:{
        type: String,
        require: true
    },
    Examination:{
        type: String,
        require: true
    },
    questionpaper:{
        name: String,
        contentType: String
    }
});

module.exports = questionpaperSchema;