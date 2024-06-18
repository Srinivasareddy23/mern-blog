import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const sigin = async (req, res, next) => {
    const {email , password} = req.body;
    if(!email || !password || email === '' || password === ''){
      next(errorHandler(400, 'All fields are required'));
    }

    try{
      const validUser = await User.findOne({ email }) ;
      if(!validUser){
        return next(errorHandler(400, 'User not found'));
      }

      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if(!validPassword){
        return next(errorHandler(400, 'Invalid Password'));
      }

      const {password : pass, ...rest} = validUser._doc; 
      
      const token = jwt.sign(  { id : validUser._id } , process.env.JWT_SECRET );
      res.status(200).cookie('access_token', token, { httpOnly : true }).json(rest);
    } catch(error){
        next(error);
    }
} ;