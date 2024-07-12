import express from "express";
import {
    getBalitas,
    getBalitaById,
    saveBalita,
    updateBalita,
    deleteBalita
} from "../controllers/BalitaController.js";
 
const router = express.Router();
 
router.get('/Balitas', getBalitas);
router.get('/Balitas/:id', getBalitaById);
router.post('/Balitas', saveBalita);
router.patch('/Balitas/:id', updateBalita);
router.delete('/Balitas/:id', deleteBalita);
 
export default router;