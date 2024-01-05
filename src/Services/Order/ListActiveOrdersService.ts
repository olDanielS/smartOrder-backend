import prismaClient from "../../prisma";

class ListActiveOrdersService{
    async execute(){

        const order = await prismaClient.order.findMany();
        return order;
    }
}

export {ListActiveOrdersService};