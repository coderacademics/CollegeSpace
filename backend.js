const express = require('express');
const app = express()
const router=require('./routes/auth');
const cors = require('cors');
app.use(cors({ origin: true }));
const port = 3001;


app.use(express.json({limit: '3mb'}))
app.use(express.urlencoded({ extended: true , limit: '3mb' }));
app.use(router)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})