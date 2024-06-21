import express from 'express';
import { sendMessageController, receiveMessageController } from '../controllers/controllers';

const router = express.Router();

router.post('/send', sendMessageController);
router.get('/receive', receiveMessageController);

export default router;
