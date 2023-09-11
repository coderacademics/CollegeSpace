const mongoose = require('mongoose');
const durl = 'mongodb+srv://saikat_2003:etaclghub.com@logindetails.tzysdxq.mongodb.net/admindb?retryWrites=true&w=majority';
const dparameters = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const connecttoAdminDB =  mongoose.createConnection(durl,dparameters);
module.exports = connecttoAdminDB;       