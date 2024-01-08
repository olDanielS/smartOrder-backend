import prismaClient from "../../prisma";

interface DetailProps{
    order_id:string
}

class DetailOrderService{
    async execute({order_id}:DetailProps){

        const order = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true

            }
        });
        return order;
    }
}

export {DetailOrderService};