import express from 'express';
import { connect } from 'amqplib';
import router from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my messaging app!');
});

app.use('/message/', router)

const setupRabbitMQ = async () => {
    try {
        const connection = await connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'messages';

        await channel.assertQueue(queue, { durable: false });

        console.log(`Connected to RabbitMQ. Listening for messages in queue '${queue}'...`);

        channel.consume(queue, (msg) => {
            if (msg !== null) {
                console.log(`Received message: ${msg.content.toString()}`);
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    setupRabbitMQ();
});
