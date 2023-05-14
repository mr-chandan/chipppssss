import { mongooseConnect } from "@/lib/mongoose";
import { Orders } from "@/models/Orders";


export default async function handle(req, res) {
    const { method } = req;

    await mongooseConnect();

    if (method === "POST") {
        const { email } = req.body;
        console.log(req.body)
        const orders = await Orders.find({ email });
        res.json(orders)
    }
}
