import { Router, Request, Response } from "express";
import { CreateUserControler } from "./Controllers/user/CreateUserController";
import { AuthUserController } from "./Controllers/user/AuthUserController";


const router = Router();

router.post("/users", new CreateUserControler().handle)
router.post("/session", new AuthUserController().handle)
export {router};