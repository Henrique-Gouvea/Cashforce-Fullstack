export interface IOffers {
  id: number,
  tax: string,
  tariff: string,
  adValorem: string,
  float: string,
  iof: string,
  expiresIn: Date,
  paymentStatusSponsor: number,
  paymentStatusProvider: number,
  orderId: number,
  sponsorId: number,
}