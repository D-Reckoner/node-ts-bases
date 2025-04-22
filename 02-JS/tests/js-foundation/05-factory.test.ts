import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '1234';
    const getAge = () => 34

    test('Build person should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });

        expect(typeof makePerson).toBe('function')
    });

    test('Build person should return a person', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '1958-01-12' })

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe', 
            birthdate: '1958-01-12', 
            age: 34
        })

    });


});