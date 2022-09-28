import dotenv from 'dotenv';

dotenv.config();
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cp4ot.mongodb.net/apimongodb?retryWrites=true&w=majority`;

const SERVER_PORT = process.env.SERVER_PORT;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
