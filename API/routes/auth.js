const express = require("express");
const router = express.Router();
const User = require("../model/User")
const bcrypt = require('bcrypt');


router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
    
        })
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json(error);
    }

})

module.exports = router;