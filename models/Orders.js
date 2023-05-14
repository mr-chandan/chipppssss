import { model, models, Schema } from "mongoose";

const orderSchema = new Schema({
    razorpay_order_id: { type: String },
    razorpay_payment_id: { type: String },
    razorpay_signature: { type: String },
    amount: { type: Number, required: true },
    contactno: { type: Number },
    address: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export const Orders = models?.Orders || model('Orders', orderSchema);