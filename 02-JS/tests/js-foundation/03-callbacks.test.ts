import { getUserById } from "../../src/js-foundation/03-callbacks"


describe('js-foundation/03-callbacks.ts', () => {
    test('If user doesnt exists, an error should be thrown', (done) => {
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBe(undefined);
            done();
        });
    })
    test('The first user should be John Doe', (done) => {
        const id = 1;
        const expected = {
            id: 1,
            name: 'John Doe',
        }

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual(expected);
            done();
        });
    });
});