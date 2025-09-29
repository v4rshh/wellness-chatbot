import express from 'express';
import { saveFormResponse } from '../controllers/form.controller.js';

const router = express.Router();

router.post('/submit', saveFormResponse);

export default router;