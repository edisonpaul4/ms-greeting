import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app = require('../../app');
import { IGreetingRequestModel } from '../../models/greeting.model';
// tslint:disable-next-line:ordered-imports
import { request } from 'chai';

chai.use(chaiHttp);

describe('Greeting Route', () => {
    it('/GET should return response on call of 500', () => {
        return request(app).get('/DevOps')
            .then((res) => {
                chai.expect(res.status).to.eql(500);
            });
    });

    it('/POST should return response on call of 200', () => {
        const requestMockup = {
            from: 'from',
            message: 'message',
            timeToLifeSec: 90,
            to: 'to',
        } as IGreetingRequestModel;
        return request(app).post('/DevOps')
            .send(requestMockup)
            .then((res) => {
                chai.expect(res.status).to.eql(200);
            });
    });
});
