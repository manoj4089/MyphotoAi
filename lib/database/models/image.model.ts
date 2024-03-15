import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
    _id: any;
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string;
    width?: number;  // Optional
    height?: number;  // Optional
    config?: object;  // Optional
    transformationURL?: string; 
    aspectRatio?: string; 
    color?: string;      
    prompt?: string;     
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    } // Assuming the 'User' model has an 'id' property of type string 
    createdAt: Date; 
    updatedAt: Date; 
}


const ImageSchema = new Schema({
    title:{type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type :String, required: true},
    secureURL: {type: String, required: true},
    width: { type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: String},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Image = models?.Image || model('Image',ImageSchema);

export default Image;
