import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';

class UserController {

  constructor(private nfService: IService) { }

  public list = async (_req: Request, res: Response) => {
    const result = await this.nfService.list()
    return res.status(200).json(result);
  }
}
export default UserController;