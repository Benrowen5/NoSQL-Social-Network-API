const router = require('express').Router();
const { createUser, getAllUsers, getUserById } = require('../../controllers/user-controller');

// set up get all and post at /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// set up get 1, put and delete User at /api/users/:id
router
    .route('/:id')
    .get(getUserById)

    // create new user
router.route('/:userId').post(createUser);

module.exports = router;