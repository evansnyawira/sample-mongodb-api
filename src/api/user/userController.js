import { AsyncWrapper } from "../../helpers/asyncWrapper";
import { AppError } from "../error/error";
import { signupUser, signinUser } from "./auth";
import { createUser, getUsers, getUser } from "./userDAO";

export const signup = AsyncWrapper(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await signupUser({
    name,
    email,
    password,
  });
  res.json(user);
});
export const signin = AsyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user = await signinUser({
    email,
    password,
  });
  res.json(user);
});
export const create = AsyncWrapper(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await createUser({
    name,
    email,
    password,
  });
  res.json(user);
});

export const getAll = AsyncWrapper(async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

export const getOne = AsyncWrapper(async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.json(user);
});
