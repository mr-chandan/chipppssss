import { mongooseConnect } from "@/lib/mongoose";
import { Products } from "@/models/products";
import Razorpay from "razorpay";

export default async function handle(req, res) {
    const { method } = req;

    await mongooseConnect();



    if (method === "POST") {
        // const { storedCartItems } = req.body;
        var instance = new Razorpay({
            key_id: process.env.KeyId,
            key_secret: process.env.KeySecret,
        });

        var options = {
            amount: 50000,  // amount in the smallest currency unit
            currency: "INR",
        };
        instance.orders.create(options, function (err, order) {
            console.log(order);
            res.json(order)
        })

    }
    if (method === "PUT") {
        //   const { name, parentcategory, _id, properties } = req.body;
        //   const categorydoc = await Category.updateOne(
        //     { _id },
        //     { name, parent: parentcategory, properties }
        //   );
        //   res.json(categorydoc);
        console.log(req.body)
    }



}