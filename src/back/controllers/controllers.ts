import { Request, Response } from 'express';
import * as messageService from '../services/service';

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { content } = req.body;
        await messageService.sendMessage(content);
        res.status(200).send({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to send message' });
    }
};

export const receiveMessages = async (req: Request, res: Response) => {
    try {
        const messages = await messageService.receiveMessages();
        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve messages' });
    }
};
