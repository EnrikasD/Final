import express from 'express';
import { createNewUser, deleteUser, updateUser, getAllUsers } from '../controllers/index.js';

const router = express.Router();

router.post('/users', createNewUser);
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
