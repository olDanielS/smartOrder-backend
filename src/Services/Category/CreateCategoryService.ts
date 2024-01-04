import prismaClient from "../../prisma"

interface CategoryProps{
    name:string
}

class CreateCategoryService{
    async execute({ name }: CategoryProps){
        console.log(name)
        if(name === '' || name == undefined) {
            throw new Error("Name invalid")
        }

        const category = prismaClient.category.create({
            data:{
                name:name
            },
            select: {
                id: true,
                name:true
            }
        })

        return category;
    }
}

export {CreateCategoryService};