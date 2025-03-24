import express from 'express';
import { 
  getAllUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser, 
  addFriend, 
  getUserThoughts,
  removeFriend 
} from '../controllers/userController.js';

const router = express.Router();

router.route('/')
  .get(getAllUsers)           
  .post(createUser);           

// /api/users/:userId
router.route('/:userId')
  .get(getUserById)           
  .put(updateUser)         
  .delete(deleteUser);    

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)           
  .delete(removeFriend);    

// /api/users/:userId/thoughts
router.route('/:userId/thoughts')
  .get(getUserThoughts);


export default router;
