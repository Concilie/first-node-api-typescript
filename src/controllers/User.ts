import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';


const createUser = (req: Request, res: Response, next: NextFunction) => {

    const { name, email, tableNumber } = req.body

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        tableNumber
    })

    return user
            .save()
            .then((user) => res.status(201).json({ user }))
            .catch((error) => res.status(500).json({ error }))
}



export default { createUser }