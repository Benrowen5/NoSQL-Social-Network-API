const router = require('express').Router();
const { addThought } = require('../../controllers/thought-controller');

// create thought /api/thoughts/:thoughtId
router.route('/:userId').post(addThought);

module.exports = router;