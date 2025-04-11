import { getPokemonNameById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises.ts', ()=> {
    test('getPokemonById should return a pokemon', async()=> {
        const pokeId = 1;
        const pokemonName = await getPokemonNameById(pokeId);

        expect(pokemonName).toBe('bulbasaur');
    });
    
    test('should return an error if pokemon doesnt exists', async()=> {
        const pokeId = 100000000;
        try {
            const pokemonName = await getPokemonNameById(pokeId);
            expect(true).toBeFalsy    
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokeId}`);
        }
        
    });


});