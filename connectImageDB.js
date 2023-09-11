const mongoose = require('mongoose');
const durl = 'mongodb+srv://saikat_2003:etaclghub.com@logindetails.tzysdxq.mongodb.net/imagedb?retryWrites=true&w=majority';
const dparameters = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const connectImageDB =mongoose.createConnection(durl,dparameters);
module.exports = connectImageDB;       