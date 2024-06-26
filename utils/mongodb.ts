import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        dbName: 'devlinks',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
