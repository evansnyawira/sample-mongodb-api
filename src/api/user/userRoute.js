import { Router } from "express";
import { create, getAll, getOne, signup, signin } from "./userController";

const router = Router();

router.route("/signup").post(signup);

router.route("/signin").post(signin);

router.route("/users").post(create).get(getAll);

router.route("/user/:id").get(getOne);

export default router;
