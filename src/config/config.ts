import dotenv from 'dotenv';

dotenv.config();
const MONGO_URL = "mongodb+srv://dbwinner:dbconcilie@cluster0.cp4ot.mongodb.net/apimongodb?retryWrites=true&w=majority";

const SERVER_PORT = process.env.SERVER_PORT;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}
