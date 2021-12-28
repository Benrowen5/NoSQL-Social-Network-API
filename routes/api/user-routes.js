const router = require('express').Router();
const { 
    createUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser,
    addFriend,
    removeFriend } = require('../../controllers/user-controller');

// set up get all and post at /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// set up get 1, put and delete User at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// Post and delete friend to/from User at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;