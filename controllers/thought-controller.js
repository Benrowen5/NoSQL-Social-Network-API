const { User, Thought } = require('../models');

const thoughtController = {
    // add User thought
    addThought({ body }, res) {
        console.log(body);
        Thought.create(body)
            .then(dbThoughtData => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'No User found with that id.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    // GET all thoughts
    getThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // GET single thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with that ID.'});
                    return;
                }
                res.json(dbThoughtData);    
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) 
    },
    // Update Thought
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id}, body, { new: true, runValidators: true })
            .then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with that ID.'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // DELETE Thought by id
    removeThought({params}, res) {
        Thought.findOneAndDelete({ _id: params.id})
            .then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.tatus(404).json({ message: 'No Thought found with that ID.'});
                    return;
                }
                res.json(dbThoughtData)
            }) 
            .catch(err => {
                console.log(err);
            res.status(400).json(err);
        })
    },
    // POST reaction to a thought
    addReaction({params, body}, res) {
        Thought.findOneAndUpdate(
            { _id: params.id},
            { $push: { reactions: body } },
            {new: true, runValidators: true}
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No Thought found with that ID.'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // DELETE reaction
    removeReaction({params}, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId},
            { $pull: { reactions: { reactionId: params.reactionId } } },
            {new: true}
            )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Reaction found with this ID.'})
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}


module.exports = thoughtController;