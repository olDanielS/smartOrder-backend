import prismaClient from "../../prisma";

class ListActiveOrdersService{
    async execute(){

        const order = await prismaClient.order.findMany({
            where: {
                draft: false,
                status:false
            },
            orderBy:{
                created_at:"desc"
            }
        });
        return order;
    }
}

export {ListActiveOrdersService};