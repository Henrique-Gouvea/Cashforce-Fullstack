import { Router } from 'express';
import NfController from '../controllers/nfController';
import NfService from '../services/nfService';

const nfService = new NfService();
const nfController = new NfController(nfService)
const userRoutes = Router()

userRoutes.get('/nfs', nfController.list);

export default userRoutes;