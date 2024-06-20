import amqp from 'amqplib';

const RABBITMQ_URL = 'amqp://localhost';

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue('messages', { durable: false });
    console.log("RabbitMQ connected")
  } catch (error) {
    console.error('Failed to connect to RabbitMQ', error);
    process.exit(1);
  }
};

export const sendMessage = (message: string) => {
  if (channel) {
    channel.sendToQueue('messages', Buffer.from(message));
  } else {
    console.error('Channel is not initialized');
  }
};

export const receiveMessage = async (): Promise<string | null> => {
  if (channel) {
    const msg = await channel.get('messages', { noAck: false });
    if (msg) {
      channel.ack(msg);
      return msg.content.toString();
    }
    return null;
  } else {
    console.error('Channel is not initialized');
    return null;
  }
};
