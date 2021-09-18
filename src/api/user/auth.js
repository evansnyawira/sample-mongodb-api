import PwdHasher from "../../helpers/pwdHasher";
import { AppError } from "../error/error";
import { createUser, getUser } from "./userDAO";
const pwdHasher = new PwdHasher();

export const signupUser = async (data) => {
  const { name, email, password } = data;
  const hashedPassword = await pwdHasher.hashPwd(password);
  const user = await createUser({
    name,
    email,
    password: hashedPassword,
  });
  return user;
};

export const signinUser = async (data) => {
  const { email, password } = data;
  const user = await getUser(email);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const hash = user.password;
  const comparePassword = await pwdHasher.check(password, hash);
  if (!comparePassword) {
    throw new AppError("Passwords do not match", 404);
  }
  return user;
};
