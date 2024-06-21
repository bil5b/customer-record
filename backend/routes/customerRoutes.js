import express from 'express';
import { saveCustomer, removeCustomer, getAllCustomers, searchCustomer } from "../controllers/dataController.js";

const router = express.Router();

router.post('/', saveCustomer);
router.delete('/:id', removeCustomer);
router.get('/search', searchCustomer);
router.get('/all', getAllCustomers);

export default router;