import { IService } from '../interfaces/IService';

export default class NfService implements IService {
  constructor(
  ) { }

  async list(): Promise<string> {
    return 'teste'
  }
}