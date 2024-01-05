import { Request, Response } from "express";

import { RemoveOrderService } from "../../Services/Order/RemoveOrderService";

class RemoveOrderController{
    async handle(req:Request, res:Response){
        const order_id = req.query.order_id as string;

        const removeOrder = new RemoveOrderService();
        const responseQuery = await removeOrder.execute({order_id});

        return res.json(responseQuery)
    }
}

export {RemoveOrderController};