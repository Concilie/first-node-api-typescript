import mongoose, { Document, Schema } from 'mongoose';

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
        name: { type: String, required: true },
        email: { type: String, required: true },
        tableNumber: { type: Number, required: true}
    }
)


export default mongoose.model<IUserModel>('User', UserSchema)