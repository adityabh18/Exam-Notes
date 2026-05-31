import express from 'express'
import { buyCredits } from '../controllers/credits.controller.js';
import isAuth from '../middlewares/isAuth.js';


const creditsRouter=express.Router();

creditsRouter.post("/buy-credits",isAuth,buyCredits)


export default creditsRouter;