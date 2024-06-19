import express from 'express';
import Signup, { google, sigin } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/signup',Signup);
route.post('/signin',sigin);
route.post('/google', google);

export default route;