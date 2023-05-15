import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 150,
  },
  surname: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 150,
  },
  email: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 150,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
