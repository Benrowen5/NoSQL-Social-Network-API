const router = require('express').Router();
const { createUser, getAllUsers } = require('../../controllers/user-controller');

// set up get all and post at /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

    // create new user
router.route('/:userId').post(createUser);

module.exports = router;