import amqp, { Connection, Channel, ConsumeMessage } from "amqplib";

const queue = "product_inventory";

(async () => {
  let connection: Connection | null = null;
  let channel: Channel | null = null;

  try {
    connection = await amqp.connect("amqp://guest:guest@localhost:5672");
    channel = await connection.createChannel();

    process.once("SIGINT", async () => {
      if (channel) await channel.close();
      if (connection) await connection.close();
      process.exit(0);
    });

    await channel.assertQueue(queue, { durable: false });
    await channel.consume(
      queue,
      (message: ConsumeMessage | null) => {
        if (message) {
          const content = JSON.parse(message.content.toString());
          console.log(" [x] Received '%s'", content);
        }
      },
      { noAck: true }
    );

    console.log(" [*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
})();
