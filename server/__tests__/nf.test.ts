import * as sinon from 'sinon';
import { expect, request, use } from 'chai';
import '@types/jest';
import chaiHttp from 'chai-http';
import app from '../src/application/app';

import { listNF } from './mocks/nf'
import { SequelizeOrders } from '../src/infrastructure/database/models/Orders';

use(chaiHttp);

describe('Teste NF', () => {
    beforeEach(() => {
        sinon.restore();
    });

    it('Deve retornar a lista com todas as NFs', async () => {
        sinon.stub(SequelizeOrders, 'findAll').resolves(listNF);

        const response = await request(app).get('/user/nfs');

        expect(response.status).to.equal(200);
        expect(response.body).to.equal(listNF);

    });

});