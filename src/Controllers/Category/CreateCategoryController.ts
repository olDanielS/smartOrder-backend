import { Request, Response } from 'express';

import { CreateCategoryService } from '../../Services/Category/CreateCategoryService';

class CreateCategoryController {
    async handle(req: Request, res: Response) {

        const { name } = req.body;

        const createCategoryService = new CreateCategoryService();
        const data = await createCategoryService.execute({ name })

        return res.json(data)
    }
}

export { CreateCategoryController };