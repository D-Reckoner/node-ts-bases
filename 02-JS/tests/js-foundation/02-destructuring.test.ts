import { characters } from "../../src/js-foundation/02-destructuring";


describe('js-foundation/02-destructuring.ts',()=> {
    test('Characters should contain Flash, Superman', () => {
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    })
    test('First character should be Flash and second Superman', () => {
        const [first, second] = characters;
        expect(first).toBe('Flash')
        expect(second).toBe('Superman')
    })

    


});