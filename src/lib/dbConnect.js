import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const clientPromise = client.connect();

export default async function dbConnect() {
  const client = await clientPromise;
  return client.db("scic-next");
}
