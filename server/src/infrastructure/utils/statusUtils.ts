const status = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado',
]

const changeValueForNameStatus = (nfArray: any) => {
  nfArray.forEach((nf: any) => (
    nf.orderStatusBuyer = status[nf.orderStatusBuyer])
  )

  return nfArray
}

export default changeValueForNameStatus;