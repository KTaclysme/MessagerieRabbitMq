import * as amqp from 'amqplib';

const QUEUE_NAME = 'messages';

export const sendMessage = async (content: string) => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        channel.sendToQueue(QUEUE_NAME, Buffer.from(content));
        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        throw new Error('Failed to send message');
    }
};

export const receiveMessages = async () => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        
        const messages: string[] = [];

        await new Promise<void>((resolve) => {
            channel.consume(QUEUE_NAME, (msg) => {
                if (msg !== null) {
                    messages.push(msg.content.toString());
                    channel.ack(msg);
                } else {
                    resolve();
                }
            });
        });

        setTimeout(() => {
            connection.close();
        }, 500);

        return messages;
    } catch (error) {
        throw new Error('Failed to receive messages');
    }
};
