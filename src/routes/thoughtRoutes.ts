import express from 'express';
import { 
  getAllThoughts, 
  getThoughtById, 
  createThought, 
  updateThought, 
  deleteThought, 
  createReaction, 
  deleteReaction 
} from '../controllers/thoughtController.js';

const router = express.Router();

// /api/thoughts
router.route('/')
  .get(getAllThoughts)         // GET all thoughts
  .post(createThought);        // POST a new thought

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getThoughtById)         // GET a single thought by ID
  .put(updateThought)          // PUT to update a thought by ID
  .delete(deleteThought);      // DELETE a thought by ID

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(createReaction);       // POST a reaction to a thought

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);     // DELETE a reaction by reactionId

export default router;
