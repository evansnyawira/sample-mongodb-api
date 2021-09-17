import { MongoClient } from "mongodb";
import { mdbConnectionString } from "../config/config";


export default async function connectDb() {
  const client = new MongoClient(mdbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect()
    const mdb = client.db();
    return { mdb, };
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await client.close();
  }
}


