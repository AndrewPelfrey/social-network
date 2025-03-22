import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thoughts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought'
        }],
    friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
});
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User = mongoose.model('User', userSchema);
export default User;
