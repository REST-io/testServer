import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const config = {
  port: parseInt(process.env.SERVER_PORT),
};
