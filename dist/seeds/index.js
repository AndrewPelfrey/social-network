import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import Thought from "../models/Thoughts.js";
dotenv.config();
const seedUsers = [
    { username: "john_doe", email: "john@example.com" },
    { username: "jane_smith", email: "jane@example.com" },
];
const seedThoughts = [
    { thoughtText: "This is my first thought!", username: "john_doe" },
    { thoughtText: "Hello world! This is so cool!", username: "jane_smith" },
];
const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB");
        console.log("Connected to MongoDB!");
        await User.deleteMany({});
        await Thought.deleteMany({});
        console.log("Database cleared!");
        const createdUsers = await User.insertMany(seedUsers);
        console.log("Users seeded:", createdUsers);
        const createdThoughts = await Thought.insertMany(seedThoughts.map((thought) => {
            const user = createdUsers.find((user) => user.username === thought.username);
            return { ...thought, userId: user?._id };
        }));
        console.log("Thoughts seeded:", createdThoughts);
        // **Link thoughts to users**
        for (const thought of createdThoughts) {
            await User.findOneAndUpdate({ username: thought.username }, { $push: { thoughts: thought._id } } // Push the thought ID into the user's thoughts array
            );
        }
        console.log("Users updated with thoughts!");
        process.exit(0);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
seedDB();
