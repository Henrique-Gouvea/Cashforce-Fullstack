import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { BuyerService } from '../../../src/app/services';
import { Buyer } from '../../../src/db/models';
import { server } from '../../../src';
import '@types/jest';
use(chaiHttp);

describe('Test NF', () => {
  beforeEach(sinon.restore);

  describe('getById', () => {
    it('deve retornar um erro caso insira um ID inválido', async () => {
      const result = await request(server).get('/buyers/a');
      expect(result.status).to.be.equal(400);
      expect(result.body.message).to.be.equal('Provide a valid ID');
    });

    it('deve retornar um erro caso o ID não exista', async () => {
      sinon.stub(Buyer, 'findByPk').resolves(null);
      const result = await request(server).get('/buyers/1');
      expect(result.status).to.be.equal(404);
      expect(result.body.message).to.be.equal('Buyer not found');
    });

    it('deve retornar o resultado', async () => {
      sinon.stub(BuyerService, 'getById').resolves({ id: 1 } as Buyer);
      const result = await request(server).get('/buyers/1');
      expect(result.status).to.be.equal(200);
      return expect(result.body.result).to.be.deep.equal({ id: 1 });
    });
  });

  describe('list', () => {
    it('deve retornar o resultado', async () => {
      sinon.stub(BuyerService, 'list').resolves([{ id: 1 }] as Buyer[]);
      const result = await request(server).get('/buyers');
      expect(result.status).to.be.equal(200);
      return expect(result.body.result).to.be.deep.equal([{ id: 1 }]);
    });
  });
});