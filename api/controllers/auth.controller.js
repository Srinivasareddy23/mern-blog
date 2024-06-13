import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === '' || email === '' || password === '') {
    next(errorHandler(400,'All fields are required'));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password : hashedPassword
    });

    await newUser.save();
    res.status(201).json({ msg: 'Signup Successful.' });
  } catch (error) {
     next(error);
  }
};

export default Signup;
