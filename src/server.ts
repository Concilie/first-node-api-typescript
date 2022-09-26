import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import userRouter from './routes/User';

const app = express();


/** Connexion a la bdd */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log(error);
    })



app.use(express.urlencoded({ extended: true}));
app.use(express.json());


/** Routes */
app.use('/users', userRouter)


/** test */
app.get('/', (req, res) => {
    res.send("hello app ")
})

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });

})


http.createServer(app).listen(config.server.port, () => { console.log(`Server Started at port ${config.server.port}`)})
