import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const db = await dbConnect();
  const dbData = await db.collection("products").find().toArray();
  const data = {
    message: "successfully get data",
    data: dbData,
    status: 200,
  };

  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const db = await dbConnect();
  const result = await db.collection("products").insertOne(body);

  return Response.json({
    message: "successfully inserted",
    data: result,
    status: 200,
  });
}
