import { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';


const createUser = (req: Request, res: Response) => {

    const { name, email, tableNumber } = req.body;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        tableNumber
    });

    return user.save()
            .then((user) => res.status(201).json({ user }))
            .catch((error) => res.status(500).json({ error }));
};

const updateUser = (req: Request, res: Response) => {

    const userId = req.params.userId;

    //verify if user exist
    return User.findById(userId)
                    .then((user) => {

                        if(user) {
                            //edit schema
                            user.set(req.body);
                            return user.save()
                                            .then((user) => res.status(200).json({ user }))
                                            .catch((error) => res.status(500).json({ error }));
                        } else {
                            return res.status(400).json({message: "User not found"});
                        }
                    })
                    .catch((error) => res.status(500).json({ error }));

};


const getAllUser = (req: Request, res: Response) => {

    return User.find()
                    .then((users) => res.status(200).json({ users }))
                    .catch((error) => res.status(500).json({ error }));
};



export default { createUser, updateUser, getAllUser };