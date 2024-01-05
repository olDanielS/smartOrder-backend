import { Request, Response } from "express";

import { RemoveItemService } from "../../Services/Order/RemoveItemService";

class RemoveItemController{
    async handle(req:Request,res:Response){
        const item_id = req.query.item_id as string;
    
        const removeItem = new RemoveItemService();
        const orderQuery = await removeItem.execute({item_id});

        return res.json(orderQuery);
    }
}

export {RemoveItemController};