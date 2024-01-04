import prismaClient from "../../prisma";

interface ProductProps{
    name:string, 
    description:string,
    price:string,
    banner:string,
    category_id: string
}

class CreateProductsService{
    async execute({name, description, price, banner, category_id}){
        
        const productQuery = await prismaClient.product.create({
            data: {
                name, description, price, banner, category_id
            }
        })
        return productQuery;
    }
}

export {CreateProductsService};