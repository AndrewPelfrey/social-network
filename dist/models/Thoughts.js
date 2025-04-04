import mongoose, { Schema, } from "mongoose";
import Reaction from './Reaction.js';
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (val) => val.toISOString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [Reaction],
});
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = mongoose.model('Thought', thoughtSchema);
export default Thought;
