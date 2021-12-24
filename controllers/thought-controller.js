const { User, Thought } = require('../models');

const thoughtController = {
    // add User thought
    addThought({ params, body, }, res) {
        console.log(body);
        Thought.create(body)
            .then(({_id}) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { comments: _id } },
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
    }
}


module.exports = thoughtController;