import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface Payload{
    sub:string;
}

function isAuthenticated(req:Request, res:Response, next:NextFunction){
   
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).end();
    }
  const [, token] = header.split(" ");

  try{
      const {sub} = verify(token, process.env.JWT_TOKEN) as Payload;
     
      req.user_id = sub;
  }catch{
    return res.status(401).end();
  }

    next();
}

export default isAuthenticated;