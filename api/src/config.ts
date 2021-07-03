import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DB: process.env.MONGO_DB || "dbVideos",
  MONGO_USER: process.env.MONGO_USER || "user",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "password",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || 4000,
};
