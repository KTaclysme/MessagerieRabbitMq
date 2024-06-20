import { Router } from 'express';
import * as messageController from '../controllers/controllers';

const router = Router();

router.post('/send', messageController.sendMessage);
router.get('/receive', messageController.receiveMessages);

export default router;
