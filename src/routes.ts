import { Router} from "express";
import multer from "multer";

import { CreateUserControler } from "./Controllers/user/CreateUserController";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { DetailUserController } from "./Controllers/user/DetailUserController";

import { CreateCategoryController } from "./Controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./Controllers/Category/ListCategoryController";

import { CreateProductsController } from "./Controllers/Products/CreateProductsController";

import isAuthenticated from "./Middlewares/isAuthenticated";

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post("/users", new CreateUserControler().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me",isAuthenticated, new DetailUserController().handle)


router.post("/category",isAuthenticated, new CreateCategoryController().handle)
router.get("/category",isAuthenticated, new ListCategoryController().handle)


router.post("/products",isAuthenticated, upload.single('file'), new CreateProductsController().handle)

export {router};