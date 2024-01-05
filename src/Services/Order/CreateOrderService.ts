import prismaClient from "../../prisma";

interface OrderProps{
    table: number,
    name: string
}

class CreateOrderService{
    async execute({table, name} : OrderProps){
        
        const result = prismaClient.order.create({
            data:{
                table,
                name
            }
        })

        return result;

    }
}

export {CreateOrderService};