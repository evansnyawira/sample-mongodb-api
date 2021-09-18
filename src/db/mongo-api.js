import { ObjectId } from "bson";
import { db } from "./db";

export const create = async (collectionName, schema, data) => {
  const connection = db.getConnection();
  const result = await connection
    .collection(collectionName, schema)
    .insertOne(data);
  return result;
};
export const getOne = async (collectionName,id) => {
    const connection = db.getConnection();
    const result = await connection.collection(collectionName).findOne({_id: ObjectId(id)})
    return result
}

export const getAll = async (collectionName) => {
    const connection = db.getConnection();
    const results = await connection.collection(collectionName).find({}).toArray();
    return results;
}