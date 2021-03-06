const express = require("express");
const router = express.Router();
const User = require("../model/User")
const bcrypt = require('bcrypt');

// Post for Register
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

// post for login
router.post("/login", async(req, res) => {
    try{
        // match/validate username
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong Credential")

        // match/validate password
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong Credential")

        const {password, ...others} = user._doc

        res.status(200).json(others);
    } catch(error) {
        res.status(500).json(error);
    }
})

module.exports = router;