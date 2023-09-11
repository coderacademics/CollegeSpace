const mongoose = require('mongoose');
const durl = 'mongodb+srv://saikat_2003:etaclghub.com@logindetails.tzysdxq.mongodb.net/QuestionPaper?retryWrites=true&w=majority';
const dparameters = {
    useNewUrlParser: true, useUnifiedTopology: true 
}
const connectToQPDB = mongoose.createConnection(durl, dparameters);


module.exports = connectToQPDB;       