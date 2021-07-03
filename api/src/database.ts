import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    console.log();
    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DB}`,
      options
    );
    console.log("db connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
