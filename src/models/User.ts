import mongoose, { Schema, model } from 'mongoose';

//Creation of interface that represent User document in mongoDB
export interface IUser {
    name: string;
    email: string;
    tableNumber: number
}

export interface IUserModel extends IUser, Document {}

//Create a schema corresponding to the document interface
const UserSchema: Schema = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true },
        tableNumber: { type: Number, require: true}
    }
)


export default model<IUserModel>('User', UserSchema)