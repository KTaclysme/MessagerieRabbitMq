import { Request, Response } from 'express';
import { sendMessage, receiveMessage } from '../services/service';

export const sendMessageController = (req: Request, res: Response) => {
  const message = req.body.message;
  sendMessage(message);
  res.send(`Message sent: "${message}"`);
};

export const receiveMessageController = async (req: Request, res: Response) => {
  const message = await receiveMessage();
  if (message) {
    res.send(message);
  } else {
    res.send('No messages');
  }
};
