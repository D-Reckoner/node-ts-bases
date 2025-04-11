import { getPokemonNameById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises.ts', ()=> {
    test('getPokemonById should return a pokemon', async()=> {
        const pokeId = 1;
        const pokemonName = await getPokemonNameById(pokeId);

        expect(pokemonName).toBe('bulbasaur!');
    });
});