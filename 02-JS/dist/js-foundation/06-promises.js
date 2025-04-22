"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonNameById = void 0;
const plugins_1 = require("../plugins");
const getPokemonNameById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await plugins_1.httpClient.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
    // const resp = await fetch( url );
    // const pokemon = await resp.json();
    // throw new Error('Pokemon no existe');
    // return fetch( url )
    //   .then( ( resp ) => resp.json())
    //   // .then( () => { throw new Error('Pokemon no existe') })
    //   .then( ( pokemon ) => pokemon.name );
};
exports.getPokemonNameById = getPokemonNameById;
