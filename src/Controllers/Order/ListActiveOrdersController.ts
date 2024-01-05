import { Request, Response } from "express";

import { ListActiveOrdersService } from "../../Services/Order/ListActiveOrdersService";

class ListActiveOrdersControler{
    async handle(req:Request,res:Response){
    
        const findOrders = new ListActiveOrdersService();
        const orderQuery = await findOrders.execute();

        return res.json(orderQuery);
    }
}

export {ListActiveOrdersControler};