import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } =  params; // ✅ await করতে হবে
  const db = await dbConnect();

  let product;
  try {
    product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
  } catch (e) {
    return Response.json({ error: "Invalid ID" }, { status: 400 });
  }

  if (!product) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(product);
}
