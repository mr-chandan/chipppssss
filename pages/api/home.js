import { mongooseConnect } from "@/lib/mongoose";
import { Products } from "@/models/products";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Products.find());
  }

  if (method === "POST") {
    const { storedCartItems } = req.body;

    try {
      const products = await Products.find({ _id: { $in: storedCartItems } });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve product data" });
    }
  }
}







// if (method === "DELETE") {
//   const { _id } = req.query;
//   await Category.deleteOne({ _id });
//   res.json("ok");
// }