import { Router } from "express";
import { getUsers, register } from "../controller/UserController";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", register);

export default userRouter;
