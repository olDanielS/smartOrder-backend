import { Request, Response } from "express";
import { CreateProductsService } from "../../Services/Products/CreateProductsService";


class CreateProductsController {
    async handle(req: Request, res: Response) {

        const { name, description, price, category_id } = req.body;

        const createProduct = new CreateProductsService();

        try{
            if (!req.file) {
                throw new Error("error upload file")
        } else {
            const { originalname, filename: banner } = req.file;

            const product = await createProduct.execute({ name, description, price, banner, category_id });
            
            return res.json(product)
            
        }
    }catch{
        return res.status(400).end();
    }

    }
}

export { CreateProductsController };