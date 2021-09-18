import { createUser, getUsers, getUser } from "./userDAO";

export const create = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await createUser({
    name,
    email,
    password,
  });
  res.json(user);
};

export const getAll = async (req, res) => {
    const users = await getUsers()
    res.json(users);
}

export const getOne = async (req, res) => {
    const id = req.params.id;
    const user = await getUser(id)
    res.json(user);
}


