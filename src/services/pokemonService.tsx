import api from './api';
import {
    PokemonListResponse,
    PokemonDetails,
    PokemonFormDetails,
    Pokemon,
} from '../types/pokemon';

export const getPokemons = async (page: number = 1): Promise<PokemonListResponse> => {
    const limit = 20;
    const offset = (page - 1) * limit;
    const response = await api.get<PokemonListResponse>(`pokemon?offset=${offset}&limit=${limit}`);

    for (const pokemon of response.data.results) {
        const details = await getPokemonDetails(pokemon.name);
        pokemon.id = details.id;
        pokemon.image = details.sprites.front_default;
    }
    return response.data;
};

export const getPokemonDetails = async (pokemonName: string): Promise<PokemonDetails> => {
    const response = await api.get<PokemonDetails>(`pokemon/${pokemonName}`);
    return response.data;
};

export const getPokemonForm = async (formUrl: string): Promise<PokemonFormDetails> => {
    const response = await api.get<PokemonFormDetails>(formUrl);
    return response.data;
};

