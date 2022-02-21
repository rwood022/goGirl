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

// get all the posts 
// localhost:3001/api/posts
router.get('/posts', async (req, res) => {
    try {
        const allPosts = await Post.find(); 
        res.status(200).json(allPosts);
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

// // create a new post by user id
// // localhost:3001/api/posts
// router.post('/posts', async (req, res) => {
//     try {
//         const newPost = await Post.create({ username: req.body.username, message: req.body.message });
//         res.status(200).json(newPost);

//     } catch (err) {
//         res.status(500).json(err); 
//     }
// });

// // create a new post and then update user table with array of posts
// // localhost:3001/api/posts
router.post('/posts', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        
        const updateUser = await User.findOneAndUpdate({ username: req.body.username }, { $push: { posts: newPost } });
        res.status(200).json(updateUser);

    } catch (err) {
        res.status(500).json(err); 
    }
});

// get a single post by its id  
// localhost:3001/api/posts/:id 
router.get('/posts/:_id', async (req, res) => {
    try {
        const onePost = await Post.findOne({ _id: req.params._id });
        res.status(200).json(onePost);
    } catch (err) {
        res.status(500).json(err);
    }
    });

// // edit a post by id 
// // localhost:3001/api/posts/:_id 
router.put('/posts/:_id', async (req, res) => {
    try {
        const updatedMessage = await Post.findOneAndUpdate({ _id: req.params._id }, { message: req.body.message });
        res.status(200).json(updatedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a post by its id 
// localhost:3001/api/users/:_id
router.delete('/posts/:_id', async (req, res) => {
    try {
        const deletedPost = await User.findOneAndDelete({_id: req.params._id });
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}); 


module.exports = router;
