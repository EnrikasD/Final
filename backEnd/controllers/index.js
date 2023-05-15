import dotenv from 'dotenv';
import User from '../models/userModel.js';

dotenv.config();

export async function createNewUser(req, res) {
  try {
    const { name, surname, email, registrationDate } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const createUser = new User({ name, surname, email, registrationDate });
    await createUser.save();
    return res.status(201).json({ message: 'User was created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, surname, email } = req.body;

    const updateUser = await User.findByIdAndUpdate(id, { name, surname, email });

    if (!updateUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(201).json({ message: 'User updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find({}, { __v: 0 });

    return res.status(201).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(201).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
