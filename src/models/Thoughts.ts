import mongoose, { Document, Schema, } from "mongoose";
import Reaction from './Reaction.js';

  export interface IThought extends Document {
    thoughtText: string;
    createdAt: string | Date;
    username: string;
    reactions: mongoose.Types.Array<Schema.Types.ObjectId>;
    reactionCount: number;
}

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (val: Date) => val.toISOString()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction],
    }
);

thoughtSchema.virtual('reactionCount').get(function(this: IThought) {
    return this.reactions.length;
});

const Thought = mongoose.model<IThought>('Thought', thoughtSchema);

export default Thought;