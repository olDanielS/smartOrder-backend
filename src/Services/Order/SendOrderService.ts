import prismaClient from "../../prisma";

interface orderProps{
    order_id:string
}


class SendOrderService{
    async handle({order_id}:orderProps){

        const order = await prismaClient.order.update({where: {
            id:order_id
        },
        data: {
            draft: false
        }
    })

        return order;
    }
}

export {SendOrderService};