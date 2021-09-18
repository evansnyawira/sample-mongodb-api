import { create, getOne, getAll, getOneById } from "../../db/mongo-api";
import { AppError } from "../error/error";
import { userSchema, collectionName } from "./userSchema";

export const createUser = async (data) => {
  console.log(data);
  const user = await create(collectionName, userSchema, data);
  const id = user.insertedId;
  const userData = await getOneById(collectionName, id);
  return userData;
};
export const getUsers = async () => {
  const users = await getAll(collectionName);
  return users;
};

export const getUser = async (email) => {     
  const user = await getOne(collectionName, email);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  return user;
};
