import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; // Використовуйте правильний тип
import { fetchPokemonByType } from '../store/searchSlice';

const SearchByType: React.FC = () => {
    const [type, setType] = useState<string>('');
    const dispatch: AppDispatch = useDispatch(); // Визначте тип dispatch

    const pokemons = useSelector((state: RootState) => state.search.pokemonsByType);
    const loading = useSelector((state: RootState) => state.search.loading);
    const error = useSelector((state: RootState) => state.search.error);

    const handleSearch = () => {
        if (type) {
            dispatch(fetchPokemonByType(type));
        }
    };

    return (
        <div>
            <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Enter Pokémon type"
            />
            <button onClick={handleSearch}>Search by Type</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchByType;
