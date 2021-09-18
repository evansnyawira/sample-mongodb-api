import { Router } from "express";
import { create, getAll, getOne } from "./userController";

const router = Router();

router.route("/users").post(create).get(getAll);

router.route('/user/:id')
.get(getOne)

export default router;
