import { ObjectId } from "bson";
import { AppError } from "../api/error/error";
import { db } from "./db";

export const create = async (collectionName, schema, data) => {
  const connection = db.getConnection();
  const result = await connection
    .collection(collectionName, schema)
    .insertOne(data);
  return result;
};
export const getOneById = async (collectionName, id) => {
  const connection = db.getConnection();
  const result = await connection
    .collection(collectionName)
    .findOne({ _id: ObjectId(id) });
  return result;
};
export const getOne = async (collectionName, email) => {
  const connection = db.getConnection();
  const result = await connection
    .collection(collectionName)
    .findOne({ email });
  return result;
};

export const getAll = async (collectionName) => {
  const connection = db.getConnection();
  const results = await connection
    .collection(collectionName)
    .find({})
    .toArray();
  return results;
};
