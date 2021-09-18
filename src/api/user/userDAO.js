import { create, getOne, getAll } from "../../db/mongo-api";
import { userSchema } from "./userSchema";

const collectionName = "user";
export const createUser = async (data) => {
  const user = await create(collectionName, userSchema, data);
  const id = user.insertedId;
  const userData = await getOne(collectionName, id);
  return userData;
};
export const getUsers = async () => {
  const users = await getAll(collectionName);
  return users;
};

export const getUser = async (id) => {
  const user = await getOne(collectionName, id);
  return user;
};
