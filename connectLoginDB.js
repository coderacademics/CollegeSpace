const mongoose = require('mongoose');
const durl = 'mongodb+srv://saikat_2003:etaclghub.com@logindetails.tzysdxq.mongodb.net/logindb?retryWrites=true&w=majority';
const dparameters = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const connectToMongoDB =mongoose.createConnection(durl,dparameters);
module.exports = connectToMongoDB;
