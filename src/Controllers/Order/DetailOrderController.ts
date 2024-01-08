import { Request, Response } from "express";

import { DetailOrderService } from "../../Services/Order/DetailOrderService";

class DetailOrderController{
    async handle(req:Request,res:Response){
    
        const order_id = req.query.order_id as string;

        const findOrders = new DetailOrderService();
        const orderQuery = await findOrders.execute({order_id});

        return res.json(orderQuery);
    }
}

export {DetailOrderController};