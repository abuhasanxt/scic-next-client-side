// import dbConnect from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";

// export async function GET(req, { params }) {
//   const { id } =await  params; // ✅ await করতে হবে
//   const db = await dbConnect();

//   let product;
//   try {
//     product = await db
//       .collection("products")
//       .findOne({ _id: new ObjectId(id) });
//   } catch (e) {
//     return Response.json({ error: "Invalid ID" }, { status: 400 });
//   }

//   if (!product) {
//     return Response.json({ error: "Not found" }, { status: 404 });
//   }

//   return Response.json(product);
// }




import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } =await params;

  const db = await dbConnect();

  let product;
  try {
    product = await db.collection("products").findOne({ _id: new ObjectId(id) });
  } catch {
    return new Response(JSON.stringify({ error: "Invalid ID" }), { status: 400 });
  }

  if (!product) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(product), { status: 200 });
}
