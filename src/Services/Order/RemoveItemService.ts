import prismaClient from "../../prisma";

interface ItemProps{
    item_id:string
}

class RemoveItemService{
    async execute({item_id}: ItemProps){
        const deleteItem = prismaClient.item.delete({where: {
            id: item_id
        }})
    
        return deleteItem;
    }
}

export {RemoveItemService};