import { Request, Response } from "express";

import { AddItemService } from "../../Services/Order/AddItemService";

class AddItemController{
    async handle(req:Request,res:Response){
        const {ammout, order_id, product_id} = req.body;
    
        const addItemOrder = new AddItemService();
        const orderQuery = await addItemOrder.execute({ammout, order_id, product_id});

        return res.json(orderQuery);
    }
}

export {AddItemController};