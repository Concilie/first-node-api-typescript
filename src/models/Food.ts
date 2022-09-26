import mongoose, { Document, Schema } from 'mongoose';

//interface represent document
export interface IFood {
    name: string
}

//extends
export interface IFoodModel extends IFood, Document {}

//schema of document in mongoDB
const IFoodSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    }
)

export default mongoose.model<IFoodModel>('Food', IFoodSchema)