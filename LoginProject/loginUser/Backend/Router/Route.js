import express from 'express';

const router  = express.Router();

import { deleteUser, insertNewData, readData, updateUser } from '../Controller/Controller.js';

router.get('/read', readData);
router.post("/",insertNewData)
router.put("/edit/:email",updateUser)
router.delete("/deleteuser/:email",deleteUser)

export default router;