import { Request, Response } from "express";
import { Thought } from '../models/index.js'; 
import { User } from "../models/index.js"; // Adjust the path if needed
import { IThought } from "../models/Thoughts.js";
import mongoose from "mongoose";

// GET all thoughts
export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find().populate('reactions');
     return res.json(thoughts);
  } catch (error: unknown) {
    if (error instanceof Error) {
    return res.status(500).json({ message: error.message })
}  else {
    return res.status(500).json({ message: "An unknown error occured "})
}
}
};

// GET a single thought by ID
export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId).populate('reactions');
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    return res.json(thought);
  } catch (error: unknown) {
    if (error instanceof Error) {
    return  res.status(500).json({ message: error.message })
}  else {
    return res.status(500).json({ message: "An unknown error occured "})
}
}
};
export const createThought = async (req: Request, res: Response) => {
    try {
      const thought: IThought = new Thought(req.body);
      await thought.save();
      
      // Find the user who created the thought
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (thought._id instanceof mongoose.Types.ObjectId) {
        user.thoughts.push(thought._id as any);
        await user.save();
      } else {
        return res.status(500).json({ message: "thought creation failed "})
      }
      
      return res.status(201).json(thought);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  };
  
// PUT to update a thought
export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    return res.json(thought);
  } catch (error: unknown) {
    if (error instanceof Error) {
    return res.status(500).json({ message: error.message })
}  else {
    return res.status(500).json({ message: "An unknown error occured "})
}
}
};

// DELETE a thought
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    return res.json({ message: 'Thought deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
    return res.status(500).json({ message: error.message })
}  else {
    return res.status(500).json({ message: "An unknown error occured "})
}
}
};
export const createReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
  
      thought.reactions.push(req.body);
      await thought.save();
      return res.status(201).json(thought);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  };
  
  // DELETE a reaction
  export const deleteReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
  
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
  
      thought.reactions.pull({ _id: req.params.reactionId });
      await thought.save();
      return res.json({ message: "Reaction deleted" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  };
  