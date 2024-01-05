import prismaClient from "../../prisma";

interface orderProps{
    order_id:string
}

class RemoveOrderService{
    async execute({order_id}:orderProps){

        const order = await prismaClient.order.delete({where: {
            id:order_id
        }})

        return order;
    }
}

export {RemoveOrderService};