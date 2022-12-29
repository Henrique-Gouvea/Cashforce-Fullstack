import { IService } from '../interfaces/IService';
import { SequelizeOrders } from '../database/models/Orders';
import { SequelizeBuyers } from '../database/models/Buyers';
import { SequelizeProviders } from '../database/models/Providers';

export default class NfService implements IService {
  constructor(
  ) { }

  async list(): Promise<any> {
    const HARD_TEST_CODE_USER_ID = 1;
    const orders = await SequelizeOrders.findAll({
      where: { userId: HARD_TEST_CODE_USER_ID },
      include: [
        { model: SequelizeBuyers, as: 'buyer', attributes: ['name', 'tradingName'] },
        { model: SequelizeProviders, as: 'provider', attributes: ['name', 'tradingName'] },
      ]
    })
    return orders;
  }
}