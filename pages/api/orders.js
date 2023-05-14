import { mongooseConnect } from "@/lib/mongoose";
import { Orders } from "@/models/Orders"
import Razorpay from "razorpay";
var crypto = require("crypto");

export default async function handle(req, res) {
    const { method } = req;

    await mongooseConnect();

    if (method === "POST") {
        const { totalAmount } = req.body;
        var instance = new Razorpay({
            key_id: process.env.KeyId,
            key_secret: process.env.KeySecret,
        });

        var options = {
            amount: totalAmount * 100,
            currency: "INR",
        };
        instance.orders.create(options, function (err, order) {
            console.log(order);
            res.json(order)
        })

    }
    if (method === "PUT") {
        var razorpay_order_id = req.body.response.razorpay_order_id;
        var razorpay_payment_id = req.body.response.razorpay_payment_id;
        let razorpay_signature = req.body.response.razorpay_signature

        let body = razorpay_order_id + "|" + razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', process.env.KeySecret)
            .update(body.toString())
            .digest('hex');
        console.log("sig received ", req.body.response.razorpay_signature);
        console.log("sig generated ", expectedSignature);

        if (expectedSignature === razorpay_signature) {

            const { amount, contactno, address } = req.body;
            const Order = await Orders.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                amount,
                contactno,
                address
            });
            res.json(Order);
        }


    };
}