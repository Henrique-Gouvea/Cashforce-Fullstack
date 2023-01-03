export interface INf {
  orderNfId: string,
  nNf: string,
  orderNumber: string,
  emissionDate: string,
  value: string,
  orderStatusBuyer: string,
  buyer: {
    name: string,
    tradingName: string
  },
  provider: {
    name: string,
    tradingName: string,
    responsibleEmail: string,
    phoneNumber: string
  }
}