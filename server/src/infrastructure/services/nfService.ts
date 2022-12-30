import { IService } from '../interfaces/IService';
import { SequelizeOrders } from '../database/models/Orders';
import { SequelizeBuyers } from '../database/models/Buyers';
import { SequelizeProviders } from '../database/models/Providers';
import changeValueForNameStatus from '../utils/statusUtils'

export default class NfService implements IService {
  constructor(
  ) { }

  async list(): Promise<any> {
    const HARD_TEST_CODE_USER_ID = 1;
    const nfArray = await SequelizeOrders.findAll({
      where: { userId: HARD_TEST_CODE_USER_ID },
      attributes: ['orderNfId', 'nNf', 'orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [
        { model: SequelizeBuyers, as: 'buyer', attributes: ['name', 'tradingName'] },
        { model: SequelizeProviders, as: 'provider', attributes: ['name', 'tradingName', 'responsibleEmail', 'phoneNumber'] },
      ],
    })

    const test = changeValueForNameStatus(nfArray);

    return test
  }
}