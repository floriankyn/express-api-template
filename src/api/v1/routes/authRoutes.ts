import express, { Router } from 'express';
const router: Router = express.Router();
import { get } from '../controllers/authController.js';
import { authenticateMasterToken } from '../middlewares/authenticate.js';

router.get('/api/v1/auth', [authenticateMasterToken], get);

export { router };