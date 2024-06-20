import { Router } from 'express';
import * as messageController from '../controllers/controllers';

const router = Router();

router.post('/se', messageController.sendMessage);
router.get('/re', messageController.receiveMessages);

export default router;
