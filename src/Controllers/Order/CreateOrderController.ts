import { Request, Response } from "express";

import { CreateOrderService } from "../../Services/Order/CreateOrderService";

class CreateOrderController{
    async handle(req:Request,res:Response){
        const {table, name} = req.body;
    
        const createOrder = new CreateOrderService();
        const orderQuery = await createOrder.execute({table, name});

        return res.json(orderQuery);
    }
}

export {CreateOrderController};