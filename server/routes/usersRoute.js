const express = require('express');
const router = express.Router();
const User = require("../models/user");


// Register
router.post("/register", async (req, res) => {

    const newuser = new User({
        name: req.body.name,
        email: req.body.email, password: req.body.password
    })
    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')
        console.log(user)
    } catch (error) {
        return res.status(400).json({ error });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            const temp = {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id,
            }
            res.send(temp)
        }
        else {
            return res.status(400).json({ message: 'Login failed' });
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error });
    }
});


// get users function
router.get("/getallusers", async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({ error });

    }
});



// delete user function 
router.delete('/deleteuser/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.findByIdAndRemove(userId);

        return res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to delete user' });
    }
});


// Update User
router.put('/updateuser/:userId', async (req, res) => {
    const { userId } = req.params;
    const updatedUserData = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        Object.assign(user, updatedUserData);

        await user.save();

        return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to update user' });
    }
});


module.exports = router