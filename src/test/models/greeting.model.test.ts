import { expect } from 'chai';
import { GreetingResponseModel, IGreetingRequestModel } from '../../models/greeting.model';

describe('Greeting Response', () => {
    it('Accepts a valid request and validate the body returning a valid response', () => {
        const response = new GreetingResponseModel();
        const requestMockup = {
            from: 'from',
            message: 'message',
            timeToLifeSec: 90,
            to: 'to',
        } as IGreetingRequestModel;
        expect(response.getResponse(requestMockup).message).to.equal('Hello to your message will be send');
    });

    it('Accepts a faulty request and validate the body returning a ERROR response', () => {
        const response = new GreetingResponseModel();
        const requestMockup = {
            from: 'from',
            message: 'message',
            timeToLifeSec: 90,
        } as IGreetingRequestModel;
        expect(response.getResponse(requestMockup).message).to.equal('ERROR');
    });
});
