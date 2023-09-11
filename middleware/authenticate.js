const jwt = require('jsonwebtoken');
const jwtSign = "ecapS@#.glC*.com";
const authenticate = (req, res, next) => {
    try {
        const token = req.header('AuthToken');
        if (!token)
            res.sendStatus(401).json({ error: "Please authenticate using a valid token" });
        else {
            const data = jwt.sign(token, jwtSign);
            req.User = data.user;
        }
        //helps to execute the next task 
        next();
    } catch (error) {
        res.sendStatus(401).json({ error: "Please authenticate user using a valid token." });
    }
}

module.exports = authenticate;