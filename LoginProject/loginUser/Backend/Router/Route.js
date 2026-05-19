import express from 'express';

const router  = express.Router();

import { readData } from '../Controller/Controller.js';

router.get('/read', readData);

export default router;