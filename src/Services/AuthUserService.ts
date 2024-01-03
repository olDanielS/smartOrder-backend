import prismaClient from "../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

    const token = sign({
        id: findUser.id,
        email: findUser.email,
        name: findUser.name
    },
    process.env.JWT_TOKEN,
    {
        subject: findUser.id,
        expiresIn: '30d'
    }
    )

    return {
        id: findUser.id,
        email: findUser.email,
        name: findUser.name,
        token: token
    }
}
}

export {AuthUserService};