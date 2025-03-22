import { Request, Response } from "express";
import { User } from "../models/index.js";
import { Types } from "mongoose";
import { Thought } from "../models/index.js";

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
       return res.json(users);
    } catch (err) {
       return res.status(500).json(err);
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId)
        .populate('thoughts')
        .populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
       return res.json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    }  else {
        return res.status(500).json({ message: "An unknown error occured "})
    }
}
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
       return res.status(201).json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    }  else {
        return res.status(500).json({ message: "An unknown error occured "})
    }
}
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    }  else {
        return res.status(500).json({ message: "An unknown error occured "})
    }
}
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: 'user deleted' });
    } catch (error: unknown) {
        if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    }  else {
        return res.status(500).json({ message: "An unknown error occured "})
    }
}
};

export const addFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);
        if (!user || !friend) {
            return res.status(404).json({ message: 'User or friend not found' });
        }
        user.friends.push(friend._id as any);
        await user.save();
        return res.json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
       return  res.status(500).json({ message: error.message })
    }  else {
        return res.status(500).json({ message: "An unknown error occured "})
    }
}
};

export const removeFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);
        if (!user || !friend) {
            return res.status(404).json({ message: 'User or friend not found' });
        }
        const friendIdStr = friend._id instanceof Types.ObjectId ? friend._id.toString() : friend._id;

        user.friends = user.friends.filter(
            (id) => id.toString() !== friendIdStr
        );
        await user.save();
       return res.json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
    }  else {
        return res.status(500).json({ message: "An unknown error occured "})
    }
}
};


export const getUserThoughts = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const thoughts = await Thought.find({ username: user.username });
    return res.json(thoughts);
  } catch (error: unknown) {
    if (error instanceof Error) {
    return res.status(500).json({ message: error.message })
}  else {
    return res.status(500).json({ message: "An unknown error occured "})
}
  }
}
