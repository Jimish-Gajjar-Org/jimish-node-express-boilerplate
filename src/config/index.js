import * as dotenv from 'dotenv';

dotenv.config();

export default {
  SERVER_PORT: process.env.SERVER_PORT,
  DATABSE_URL: process.env.DATABSE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
