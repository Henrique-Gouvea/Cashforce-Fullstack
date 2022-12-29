import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {

  constructor(private userService: UserService) { }

  public listNF = async (req: Request, res: Response) => {
    const result = await this.userService.listNF()
    return res.status(200).json(result);
  }
}
export default UserController;