import prismaClient from "../../prisma"

class ListCategoryService{
    async execute(){

    const categoryQuery = prismaClient.category.findMany({
        select: {
            id:true,
            name:true
        }
    });
    return categoryQuery
    }
}

export {ListCategoryService}