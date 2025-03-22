import mongoose, { Schema } from "mongoose";

const reactionSchema: Schema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: { 
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (val: Date) => val.toISOString()
        },
    }
);

export default reactionSchema;