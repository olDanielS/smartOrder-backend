import { Router, Request, Response } from "express";
import { CreateUserControler } from "./Controllers/user/CreateUserController";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { DetailUserController } from "./Controllers/user/DetailUserController";

import { CreateCategoryController } from "./Controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./Controllers/Category/ListCategoryController";

import isAuthenticated from "./Middlewares/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserControler().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me",isAuthenticated, new DetailUserController().handle)


router.post("/category",isAuthenticated, new CreateCategoryController().handle)
router.get("/category",isAuthenticated, new ListCategoryController().handle)



export {router};