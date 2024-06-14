import express from 'express';
import Signup, { sigin } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/signup',Signup);
route.post('/signin',sigin);

export default route;