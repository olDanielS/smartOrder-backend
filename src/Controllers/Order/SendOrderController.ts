import { Request, Response } from "express";

import { SendOrderService } from "../../Services/Order/SendOrderService";

class SendOrderController{
    async handle(req:Request, res:Response){

        const order_id = req.query.order_id as string;

        const sendOrder = new SendOrderService();
        const checkOrder = await sendOrder.handle({order_id})

        
        return res.json(checkOrder);
    }
}

export {SendOrderController};