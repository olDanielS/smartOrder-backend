import {Request, Response} from 'express';

import { AuthUserService } from "../../Services/User/AuthUserService";

class AuthUserController{
    async handle(req: Request, res:Response){

    const {email, password} = req.body;

    const auth = new AuthUserService();
    const user = await auth.execute({email, password})

    return res.json(user);
    }
}

export {AuthUserController};