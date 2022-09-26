import { Schema, model } from 'mongoose';

//interface represent document
export interface IFood {
    name: string
}

//extends
export interface IFoodModel extends IFood, Document {}

//schema of document in mongoDB
const IFoodSchema: Schema = new Schema(
    {
        name: { type: String, require: true }
    }
)

export default model<IFoodModel>('Food', IFoodSchema)