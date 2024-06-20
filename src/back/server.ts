import app from './app';
import { connectRabbitMQ } from './services/service';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectRabbitMQ();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();