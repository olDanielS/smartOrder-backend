import prismaClient from "../../prisma";

interface orderProps{
    order_id:string
    product_id:string,
    ammout:number,
}

class AddItemService{
    async execute({order_id, product_id, ammout}:orderProps){

        const order = await prismaClient.item.create({
            data: {
                order_id:order_id,
                product_id:product_id,
                ammout:ammout
            }
        })

        return order;
    }
}

export {AddItemService};