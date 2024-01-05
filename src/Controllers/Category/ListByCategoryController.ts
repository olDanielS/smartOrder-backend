import {Request, Response} from 'express';
import { ListByCategoryService } from '../../Services/Category/ListByCategoryService';

class ListByCategoryController{
    async handle(req:Request, res:Response){

        const category_id = req.query.category_id as string; 

        const listByCategory = new ListByCategoryService();
    
        try{

            const resultQuery = await listByCategory.execute({category_id})
            return res.json(resultQuery)
        }catch{
            res.status(500).end();
        }
    }
}

export {ListByCategoryController}