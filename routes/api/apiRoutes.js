const router = require('express').Router(); 
const User = require('../../models/User');
// const Profile = require('../../models/Profile');
const Post = require('../../models/Post');

// get all users
// localhost:3001/api/users
router.get('/users', async (req, res) => {
    try {
        const allUsers = await User.find(); 
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err); 
    }
    });

// get a single user by their id
// localhost:3001/api/users/id 
router.get('/users/:_id', async (req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params._id });
        res.status(200).json(oneUser);
    } catch (err) {
        res.status(500).json(err);
    }
    });

// create a new user
// localhost:3001/api/users
router.post('/users', async (req, res) => {
    try {
        const newUser = await User.create({ username: req.body.username, password: req.body.password }); 
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err); 
    }
    });

// update user by their id
// localhost:3001/api/users
router.put('/users/:_id', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({_id: req.params._id}, { username: req.body.username, password: req.body.password });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// delete a user by their id 
// localhost:3001/api/users/:_id
router.delete('/users/:_id', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({_id: req.params._id });
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// add a friend by username
// localhost:3001/api/users/:username/:friend
router.put('/users/:username/:friend', async (req, res) => {
    try {
        const newFriend = await User.findOneAndUpdate({ username: req.params.username }, { friends: req.params.friend }); 
        res.status(200).json(newFriend);
    } catch (err) {
        res.status(500).json(err); 
    }
    });

// delete a friend by username
// localhost:3001/api/users/:username/:friend
router.delete('/users/:username/:friend', async (req, res) => {
    try {
        const deletedFriend = await User.findOneAndUpdate({ username: req.params.username }, { $pull: { friends: req.params.friend } }, { new: true });
        res.status(200).json(deletedFriend);
    } catch (err) {
        res.status(500).json(err); 
    }
    });

// get all posts of a user by username
// localhost:3001/api/posts/:username 
router.get('/posts/:username', async (req, res) => {
    try {
        const userPosts = await Post.find({ username: req.params.username });
        res.status(200).json(userPosts);
    } catch (err) {
        res.status(500).json(err);
    }
    });

module.exports = router;
