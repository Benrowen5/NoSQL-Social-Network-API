const router = require('express').Router();
const { addThought, 
        getThoughts,
        getThoughtById,
        updateThought,
        removeThought,
        addReaction,
        removeReaction } = require('../../controllers/thought-controller');

// Get all and post thoughts at /api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(addThought);

// Get single, update and delete Thought by id at /thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// Post and Delete reactions to Thoughts /api/thoughts/:thoughtId/reactions
router
    .route('/:id/reactions')
    .post(addReaction)

// Delete reaction from thought
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;