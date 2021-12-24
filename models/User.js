const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
        virtuals: true
        }
    }
);

// // Get length of friends array for User
// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.reduce()
// })

// create user model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;