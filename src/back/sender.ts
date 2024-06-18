import amqp, { Connection, Channel } from "amqplib";

const queue = "product_inventory";
const text = {
  item_id: "macbook",
  text: "This is a sample message to send receiver to check the ordered Item Availablility",
};

(async () => {
  let connection: Connection | null = null;
  let channel: Channel | null = null;

  try {
    connection = await amqp.connect("amqp://guest:guest@localhost:5673");
    channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)));
    console.log(" [x] Sent '%s'", JSON.stringify(text));
    
    await channel.close();
  } catch (err) {
    console.warn(err);
  } finally {
    if (connection) await connection.close();
  }
})();
