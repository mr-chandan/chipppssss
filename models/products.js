import { model, models, Schema } from "mongoose";

const ProductsSchema = new Schema({
    Productname: { type: String },
    description: { type: String },
    imageurl: { type: String },
    Price: { type: Number }
});

export const Products = models?.Products || model('Products', ProductsSchema);