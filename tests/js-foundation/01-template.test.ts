import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01', () => {
    test('emailTemplate should contain a greeting', () => {
        const greeting = 'Hi';
        expect(emailTemplate).toContain('Hi, ');
    });
    test('emailTemplate should contain orderId', ()=> {
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    })
});