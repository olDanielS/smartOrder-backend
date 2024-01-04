import {Request, Response} from 'express';
import { CreateUserService } from '../../Services/User/CreateUserService';

class CreateUserControler{
    async handle(req:Request, res:Response){
        const {name, email, password} = req.body;

        const createUserServices = new CreateUserService();
        const user = await createUserServices.execute({name, email, password});

        return res.json({user})
    }

}

export {CreateUserControler};