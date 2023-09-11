const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const multer =require('multer');
const path = require('path');
// const upload = require('../imageUploadMulterBackend')
const { exists } = require("../mongodb_models/signup");
const SignupSchema = require('../mongodb_models/signup');
const ImageSchema = require('../mongodb_models/images');
const EventSchema = require('../mongodb_models/Admin Models/eventAdd');
const notificationSchema = require("../mongodb_models/Admin Models/notificationAdd");
const admindb = require("../../collegespace/connectAdminDB");
const imagedb = require("../../collegespace/connectImageDB");
const logindb = require("../../collegespace/connectLoginDB");
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authUser = require('../middleware/authenticate');
const questionpaperSchema = require("../mongodb_models/Admin Models/questionpaper");
const jwtSign = "ecapS@#.glC*.com";
// -----------------------CREATING MODELS FROM THE IMPORTED SCHEMAS AND DATABASE CONNECTIONS-------------------------------
const Signup = logindb.model("Signup", SignupSchema);
const Image = imagedb.model("Image", ImageSchema);
const Event = admindb.model("Event", EventSchema);
const Notification = admindb.model("Notifications", notificationSchema)
const QuestionPaper = admindb.model("QuestionPaper", questionpaperSchema);
const date = new Date(Date.now());
const year = date.getFullYear();
const month = date.getMonth()+1;
const day =date.getDate();
const hours = Number(String(date.getHours()).padStart(2, '0'));
const minutes = Number(String(date.getMinutes()).padStart(2, '0'));
const seconds = Number(String(date.getSeconds()).padStart(2, '0'));
const time = `${hours}:${minutes}:${seconds}`;




//----------------------------- GET METHODS ----------------------------------------------------------



router.get('/images',  (req, res) => {
    res.contentType('application/json');
   Image.find({},(err,items)=>{
        if(err)
            console.log(err);
        else
        {
            res.contentType('json');
            res.status(200).send(items)
        }
    })
})

router.get('/events', async (req, res) => {
    const eventList = Event.find({});
    res.send({ status: "ok", data: eventList });
});


router.get('/notifications', async (req, res) => {
    const notificationList = await Notification.find({});
    res.send({ status: "ok", data: notificationList });
});

//----------------------------- USER SIGNUP BACKEND ----------------------------------------------------------
router.post('/signup', (req, res) => {
    res.type('application/json')
    const { susername, sname, semail, spassword, scpassword,sdept,sdob, scollege } = req.body;
    if (!susername || !sname || !semail || !spassword || !scpassword || !sdept || !sdob || !scollege) {
        return res.status(422).json({ message: "Fill out all the compulsory fields!!" })

    }
    else if (!susername || !sname || !semail || !spassword || !scpassword || spassword != scpassword) {
        return res.status(422).json({ message: "Password and confirm password does not match" })
    }
    else {
        Signup.findOne({ userEmailAddress: semail })
            .then((exist) => {
                if (exist)
                    return res.status(422).json({ error: "Email already registered!! Try another email." })
            })
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(spassword, salt);
        const user = new Signup({ username: susername, name: sname, userEmailAddress: semail, password: hashPassword, department:sdept , date_of_birth: sdob, institute: scollege });
        const userInfo = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(userInfo, jwtSign);
        user.save().then((e) => {
            return res.status(200).json({ authToken })
        })
    }
});

//----------------------------- USER SIGNIN BACKEND ----------------------------------------------------------
router.post('/signin', async (req, res) => {
    try {
        res.type('application/json')
        const { semail, spassword } = req.body;
        if (!semail || !spassword) {
            return res.status(422).json({ message: "Fill out all the fields!!" })
        }
        else {
            const user = await Signup.findOne({ userEmailAddress: semail });
            if (!user) {
                return res.sendStatus(404).json({ error: "Incorrect Username or password. Try again!!" });
            }
            const passwordCompare = await bcrypt.compare(spassword, user.password);
            if (!passwordCompare) {
                res.status(401).json({ message: "Username or Password does not match!!" });
            }

            const userInfo = {
                user: {
                    id: user.id
                }
            };
            const authToken = jwt.sign(userInfo, jwtSign);
            res.json({ authToken, user: user.userEmailAddress });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});

//-----------------------------VALIDATION REQUEST--------------------------------------------------------
const logout_autheticate = (authToken, username) => {
    try {
        const data = jwt.sign(token, jwtSign);
        if (data.user === username)
            return true;
        else
            return false;
    }
    catch (error) {
        return false;
    }
}

//----------------------------- USER LOGOUT BACKEND ----------------------------------------------------------
router.get('/logout', async (req, res) => {
    try {
        res.send(200).json({ message: "Logout Successfull!" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
});





//---------------------------------IMAGE UPLOAD BACKEND ROUTE --------------------------------------------
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'client/src/image_uploads/')
        
    },
    filename: (req,file,cb)=>
    {
        cb(null,Date.now()+'-'+file.originalname)
    }
});
 
var upload = multer({ storage: storage });
router.post('/imageupload', upload.single('image'), (req, res, next) => {
    const newImage = new Image({
        caption: req.body.caption,
        image:{
            contentType: req.file.mimetype,
            name: req.file.filename
        }
    });
    newImage.save()
    .then((e) =>
    {
        console.log("Image saved successfully!!");
        return res.json({message: "Uploaded successfully!!"});    
    })
    .catch((err) => console.log(err))
});


//---------------------------------QUESTIONPAPER UPLOAD BACKEND ROUTE --------------------------------------------
var filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'client/src/file_uploads/')
        
    },
    filename: (req,file,cb)=>
    {
        cb(null,file.originalname)
    }
});
 
var fileupload = multer({ storage: filestorage });
router.post('/questionpaperupload', fileupload.single('questionpaper'), (req, res, next) => {
    const newQuestionPaper = new QuestionPaper({
        Examination: req.body.examination,
        Semester : req.body.semester,
        questionpaper:{
            contentType: req.file.mimetype,
            name: req.file.filename
        }
    });
    newQuestionPaper.save()
    .then((e) =>
    {
        console.log("QuestionPaper saved successfully!!");
        return res.json({message: "Uploaded successfully!!"});    
    })
    .catch((err) => console.log(err))
});




//------------------------ADMIN ROUTES-------------------------------------------
//These routes will be explicity accessible by the admin only.

//connection to AdminDB database for the storing the various Admin files
router.post('/admin@clgquora/eventupload', (req, res) => {
    res.type('application/json');
    const { eventName, eventDetails, eventLink } = req.body;
    if (!eventName || !eventDetails || !eventLink) {

        return res.status(422).json({ message: "Please fill out all the fields!!" })
    }
    else {
        Event.findOne({ eventName: eventName })
            .then((exists) => {
                if (exists)
                    return res.sendStatus(409);
                else {
                    const newEvent = new Event({ eventName: eventName, eventDetails: eventDetails, eventLink: eventLink });
                    newEvent.save().then((e) => {
                        return res.sendStatus(200);
                    })
                }
            })

    }
})


router.post('/admin@clgquora/notificationUpload', (req, res) => {
    res.type('application/json');
    const { notificationName, notificationDetails, notificationDate } = req.body;
    if (!notificationName || !notificationDetails || !notificationDate) {

        return res.status(422).json({ message: "Please fill out all the fields!!" })
    }
    else {
        Notification.findOne({ notificationName: notificationName })
            .then((exists) => {
                if (exists)
                    return res.sendStatus(409);
                else {
                    const newnotification = new Notification({ notificationName: notificationName, notificationDetails: notificationDetails, notificationDate: notificationDate });
                    newnotification.save().then((e) => {
                        return res.sendStatus(200);
                    })
                }
            })

    }
})

router.post('/eventdelete', async (req, res) => {
    try {
        res.type('application/json');
        console.log(req.body);
        const data = await Event.findOneAndDelete({ eventName: req.body.name });
        res.send({ status: 200, data: "Event successfully deleted!!" });
    } catch (error) {
        res.sendStatus(500);
    }
})
router.post('/imagedelete', async (req, res) => {
    try {
        res.type('application/json');
        const data = await Image.findOneAndDelete({'image.name': req.body.name});
        const imgpath = `client/src/image_uploads/${req.body.name}`
        fs.unlink(imgpath,(err)=>
        {
            if(err)
                res.send({status:500,data:"Some error occured!!"});
            else    
                res.send({ status: 200, data: "Image successfully deleted!!" });
        })
    } catch (error) {
        res.sendStatus(500);
    }
})


router.post('/questionpaperdelete', async (req, res) => {
    try {
        res.type('application/json');
        const data = await QuestionPaper.findOneAndDelete({'questionpaper.name': req.body.name});
        const filepath = `client/src/file_uploads/${req.body.name}`
        fs.unlink(filepath,(err)=>
        {
            if(err)
                res.send({status:500,data:"Some error occured!!"});
            else    
                res.send({ status: 200, data: "Question Paper successfully deleted!!" });
        })
    } catch (error) {
        res.sendStatus(500);
    }
})

router.post('/notificationdelete', async (req, res) => {
    try {
        res.type('application/json');
        console.log(req.body);
        const data = await Notification.findOneAndDelete({ notificationName: req.body.name });
        res.send({ status: 200, data: "Notification successfully deleted!!" });
    } catch (error) {
        res.sendStatus(500);
    }
})



router.get('/fetchevents', async (req, res) => {
    try {
        res.type('application/json');
        const data = await Event.find({});
        res.send({ status: 200, data: data });
    } catch (error) {
        res.sendStatus(500);
    }
})

router.get('/fetchimages', async (req, res) => {
    try {
        res.type('application/json');
        const data = await Image.find({});
        res.send({ status: 200, data: data });
    } catch (error) {
        res.sendStatus(500);
    }
})

router.get('/fetchquestionpapers', async (req, res) => {
    try {
        res.type('application/json');
        const data = await QuestionPaper.find({});
        res.send({ status: 200, data: data });
    } catch (error) {
        res.sendStatus(500);
    }
})

router.post('/searchquestionpapers', async (req, res) => {
    try {
        res.type('application/json');
        const data = await QuestionPaper.find({Semester: req.body.semester, Examination: req.body.examination});
        res.send({ status: 200, data: data });
    } catch (error) {
        res.sendStatus(500);
    }
})




router.get('/fetchnotifications', async (req, res) => {
    try {
        res.type('application/json');
        const data = await Notification.find({});
        res.send({ status: 200, data: data });
    } catch (error) {
        res.sendStatus(500);
    }

})

// -----------------------------Profile Update----------------------------------------------

router.post('/profiledetails', async (req, res) => {
    try {
        res.type('application/json')
        const user = await Signup.findOne({ userEmailAddress: req.body.user });
        if (!user) {
            return res.sendStatus(404).json({ error: "Incorrect Username or password. Try again!!" });
        }
        const userInfo = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(userInfo, jwtSign);
        res.json(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});

router.post('/changeprofile', async (req, res) => {
    res.type('application/json')
    const { susername, semail, sname, sdept, sdob, scollege } = req.body;    
    try {
        const userProfile = await Signup.findOneAndUpdate(
          { userEmailAddress: semail },
          { username: susername, name: sname, department: sdept, date_of_birth: sdob, institute: scollege },
          { new: true }
        );
        res.send({ status: 200, message: 'Profile Updated' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating profile');
    }
});

router.post('/changepassword', async (req, res) => {
    res.type('application/json')
    const { semail, spassword, snpassword, sncpassword } = req.body;
    console.log(req.body);
    if (!spassword || !snpassword || !sncpassword) {
        return res.status(422).json({ message: "Fill out all the compulsory fields!!" })
    }
    else {
        const user = await Signup.findOne({ userEmailAddress: semail });
        const passwordCompare = await bcrypt.compare(spassword, user.password);
        if (!passwordCompare) {
            res.status(401).json({ message: "Old Password does not match!!" });
        }
        else {
            if( snpassword != sncpassword) {
                return res.status(422).json({ message: "Password and confirm password does not match" })
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                const newHashPassword = bcrypt.hashSync(snpassword, salt);
                try {
                    const userProfile = await Signup.findOneAndUpdate(
                      { userEmailAddress: semail },
                      { password: newHashPassword },
                      { new: true }
                    );
                    res.send({ status: 200, message: 'Profile Updated' });
                } catch (err) {
                        console.error(err);
                        res.status(500).send('Error updating profile');
                }
            }
        }
    }
});



module.exports = router;