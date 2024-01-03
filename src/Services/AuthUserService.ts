import prismaClient from "../prisma";
import { compare, hash } from "bcryptjs";

interface UserProps{
    email:string,
    password:string
}


class AuthUserService{
    async execute({email, password}:UserProps){
       
    const findUser = await prismaClient.user.findFirst({where: {
        email: email
    }})
    if(!findUser){
        throw new Error("Email/password incorrect")
    }

    const passMatch = await compare(password, findUser.password)
    if(!passMatch){
        throw new Error("Email/password incorrect")
    }

    return {ok:true}

}
}

export {AuthUserService};