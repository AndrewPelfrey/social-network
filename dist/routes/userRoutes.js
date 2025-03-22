import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, getUserThoughts, removeFriend } from '../controllers/userController.js';
const router = express.Router();
// /api/users
router.route('/')
    .get(getAllUsers) // GET all users
    .post(createUser); // POST a new user
// /api/users/:userId
router.route('/:userId')
    .get(getUserById) // GET a single user by ID
    .put(updateUser) // PUT to update a user by ID
    .delete(deleteUser); // DELETE a user by ID
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend) // POST to add a friend
    .delete(removeFriend); // DELETE to remove a friend
// /api/users/:userId/thoughts
router.route('/:userId/thoughts')
    .get(getUserThoughts);
export default router;
