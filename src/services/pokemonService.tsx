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

    // Оновлюємо кожного покемона, додаючи id та image
    for (const pokemon of response.data.results) {
        const details = await getPokemonDetails(pokemon.name);
        pokemon.id = details.id;
        pokemon.image = details.sprites.front_default;
    }
    return response.data;
};

// Отримання інформації про конкретного покемона
export const getPokemonDetails = async (pokemonName: string): Promise<PokemonDetails> => {
    const response = await api.get<PokemonDetails>(`pokemon/${pokemonName}`);
    return response.data;
};

// Отримання інформації про конкретну форму покемона
export const getPokemonForm = async (formUrl: string): Promise<PokemonFormDetails> => {
    const response = await api.get<PokemonFormDetails>(formUrl);
    return response.data;
};

// Пошук покемона за іменем
export const searchPokemonByName = async (pokemonName: string): Promise<PokemonDetails> => {
    const response = await api.get<PokemonDetails>(`pokemon/${pokemonName.toLowerCase()}`);
    return response.data;
};

// Пошук покемонів за типом
export const searchPokemonsByType = async (type: string): Promise<Pokemon[]> => {
    const response = await api.get<{ pokemon: { pokemon: Pokemon }[] }>(`type/${type.toLowerCase()}`);
    return response.data.pokemon.map(p => p.pokemon);
};

// Пошук покемонів за ability
export const searchPokemonsByAbility = async (ability: string): Promise<Pokemon[]> => {
    const response = await api.get<{ pokemon: { pokemon: Pokemon }[] }>(`ability/${ability.toLowerCase()}`);
    return response.data.pokemon.map(p => p.pokemon);
};
