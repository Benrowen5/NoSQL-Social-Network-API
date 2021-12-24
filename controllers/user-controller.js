const { User } = require('../models');
const { populate } = require('../models/User');

const userController = {
    // create User
    createUser({body}, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    // get all Users
    getAllUsers(req, res) {
        User.find({})
            // .populate({
            //     path: 'thoughts',
            //     select: '-__V'
            // })
            // .select('-__V')
            // .sort({_id: -1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}

module.exports = userController;