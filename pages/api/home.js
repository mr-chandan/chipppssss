import { mongooseConnect } from "@/lib/mongoose";
import { Products } from "@/models/products";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Products.find());
  }

}



// if (method === "POST") {
//   const { name, parentcategory, properties } = req.body;
//   const categorydoc = await Category.create({
//     name,
//     parent: parentcategory || undefined,
//     properties,
//   });
//   res.json(categorydoc);
// }

// if (method === "PUT") {
//   const { name, parentcategory, _id, properties } = req.body;
//   const categorydoc = await Category.updateOne(
//     { _id },
//     { name, parent: parentcategory, properties }
//   );
//   res.json(categorydoc);
// }

// if (method === "DELETE") {
//   const { _id } = req.query;
//   await Category.deleteOne({ _id });
//   res.json("ok");
// }