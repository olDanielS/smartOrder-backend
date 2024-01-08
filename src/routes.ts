import { Router} from "express";
import multer from "multer";

import { CreateUserControler } from "./Controllers/user/CreateUserController";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { DetailUserController } from "./Controllers/user/DetailUserController";

import { CreateCategoryController } from "./Controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./Controllers/Category/ListCategoryController";
import { ListByCategoryController } from "./Controllers/Category/ListByCategoryController";

import { CreateProductsController } from "./Controllers/Products/CreateProductsController";

import { CreateOrderController } from "./Controllers/Order/CreateOrderController";
import { RemoveOrderController } from "./Controllers/Order/RemoveOrderController";
import { ListActiveOrdersControler } from "./Controllers/Order/ListActiveOrdersController";
import { AddItemController } from "./Controllers/Order/AddItemController";
import { RemoveItemController } from "./Controllers/Order/RemoveItemController";
import { SendOrderController } from "./Controllers/Order/SendOrderController";
import { DetailOrderController } from "./Controllers/Order/DetailOrderController";
import { FinishOrderController } from "./Controllers/Order/FinishOrderController";


import isAuthenticated from "./Middlewares/isAuthenticated";

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//User
router.post("/users", new CreateUserControler().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me",isAuthenticated, new DetailUserController().handle)

//Categories
router.post("/category",isAuthenticated, new CreateCategoryController().handle)
router.get("/category",isAuthenticated, new ListCategoryController().handle)

//Products
router.post("/products",isAuthenticated, upload.single('file'), new CreateProductsController().handle)
router.get("/category/product", isAuthenticated, new ListByCategoryController().handle)

//Orders
router.post("/order", isAuthenticated, new CreateOrderController().handle)
router.delete("/order", isAuthenticated, new RemoveOrderController().handle)
router.get("/order", isAuthenticated, new ListActiveOrdersControler().handle)
router.post("/order/add", isAuthenticated, new AddItemController().handle)
router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle)
router.put("/order/send", isAuthenticated, new SendOrderController().handle)
router.get("/order/detail", isAuthenticated, new DetailOrderController().handle)
router.put("/order/finish", isAuthenticated, new FinishOrderController().handle)


export {router};