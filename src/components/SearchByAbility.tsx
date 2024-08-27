import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; // Використовуйте правильний тип
import { fetchPokemonByAbility } from '../store/searchSlice';

const SearchByAbility: React.FC = () => {
    const [ability, setAbility] = useState<string>('');
    const dispatch: AppDispatch = useDispatch(); // Визначте тип dispatch

    const pokemons = useSelector((state: RootState) => state.search.pokemonsByAbility);
    const loading = useSelector((state: RootState) => state.search.loading);
    const error = useSelector((state: RootState) => state.search.error);

    const handleSearch = () => {
        if (ability) {
            dispatch(fetchPokemonByAbility(ability));
        }
    };

    return (
        <div>
            <input
                type="text"
                value={ability}
                onChange={(e) => setAbility(e.target.value)}
                placeholder="Enter Pokémon ability"
            />
            <button onClick={handleSearch}>Search by Ability</button>
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

export default SearchByAbility;
