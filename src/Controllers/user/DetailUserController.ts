import { Request, Response, NextFunction } from 'express';
import { DetailUserService } from "../../Services/User/DetailUserService";

class DetailUserController {
   async handle(req: Request, res: Response) {

      const user_id = req.user_id;

      const detailUserService = new DetailUserService();
      const details = await detailUserService.execute(user_id)

      return res.json(details)

   }
}

export { DetailUserController };