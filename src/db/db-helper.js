import { ObjectId } from "bson";


export default class DbHelper {
  activeDb;
  currentDb;
  constructor(collection, schema, connectDb) {
    this.client = connectDb;
    this.collection = collection;
    this.schema = schema;
  }
   static async initDb() {
    try {
      this.activeDb = await this.client()
        .db()
        .collection(this.collection, this.schema);
      console.log(this.activeDb);
      console.log("collection set");
    } catch (err) {
      console.error(err);
    }
  }
  async create(data) {
    try {
      const result = await this.activeDb.inserOne(data);
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  async getAll(pipeline) {
    try {
      const results = await this.activeDb.aggregate(pipeline);
      return results;
    } catch (err) {
      console.error(err);
    }
  }
  async getOne(id) {
    try {
      const result = await this.activeDb.find({
        _id: ObjectId(id),
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  async updateOne(id, data) {
    try {
      const result = await this.activeDb.updateOne(
        { _id: ObjectId(id) },
        { $set: data }
      );
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  async deleteOne(id) {
    try {
      const result = await this.activeDb.deleteOne({ _id: ObjectId(id) });
      return result;
    } catch (err) {
      console.error(err);
    }
  }
}
