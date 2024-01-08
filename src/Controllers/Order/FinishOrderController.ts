import { Request, Response } from "express";

import { FinishOrderService } from "../../Services/Order/FinishOrderService";

class FinishOrderController{
    async handle(req:Request,res:Response){
    
        const order_id = req.query.order_id as string;

        const findOrders = new FinishOrderService();
        const orderQuery = await findOrders.execute({order_id});

        return res.json(orderQuery);
    }
}

export {FinishOrderController};