import amqp from 'amqplib/callback_api';

const RABBITMQ_URL = 'amqp://localhost';

export const connectRabbitMQ = (callback: (channel: amqp.Channel) => void) => {
  amqp.connect(RABBITMQ_URL, (err, connection) => {
    if (err) {
      throw err;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        throw err;
      }
      callback(channel);
    });
  });
};
