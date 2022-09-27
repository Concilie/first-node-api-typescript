import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import userRouter from './routes/User';

export const app = express();


/** Connexion a la bdd */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log(error);
    });



app.use(express.urlencoded({ extended: true}));
app.use(express.json());

/** Access Control Allow */
app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*'); //Allow all origin domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //type using header
    //pour des requetes autres que GET et POST le navigateur va effectuer une pré-controle en appelant la ressource via OPTIONS
    if(req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});


/** Routes */
app.use('/users', userRouter);


/** test */
app.get('/', (req, res) => {
    res.send("hello app ");
});

/** Error handling */
app.use((req, res) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });

});


http.createServer(app).listen(config.server.port, () => { console.log(`Server Started at port ${config.server.port}`);});
