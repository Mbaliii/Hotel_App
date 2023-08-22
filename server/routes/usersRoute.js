const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {

    const newuser = new User({
        name: req.body.name,
        email: req.body.email, password: req.body.password
    })
    try {
        const user = await newuser.save()
        res.send('User Registred Successfully')
        console.log(user)
    } catch (error) {
        return res.status(400).json({ error });
    }
});


router.post("/login", (req, res) => {
    const { email, password } = req.body

    try {
        const user = User.findOne({ email: email, password: password })
        res.send(user)
    } catch (error) {
        res.send()
    }
});