// pages/PokemonPage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../store/pokemonSlice';
import { RootState, AppDispatch } from '../store/store';
import PokemonForms from '../components/PokemonForms'; // Імплементуйте цей компонент

const PokemonPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { pokemonDetails, loading, error } = useSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        if (id) {
            dispatch(fetchPokemonDetails(Number(id)));
        }
    }, [dispatch, id]);

    const pokemon = pokemonDetails[Number(id)];

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {pokemon && (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h2>Abilities:</h2>
                    <ul>
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}
                    </ul>
                    <h2>Types:</h2>
                    <ul>
                        {pokemon.types.map((type) => (
                            <li key={type.type.name}>{type.type.name}</li>
                        ))}
                    </ul>
                    <h2>Stats:</h2>
                    <ul>
                        {pokemon.stats.map((stat) => (
                            <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                        ))}
                    </ul>
                    <PokemonForms forms={pokemon.forms} /> {/* Додано компонент для форм */}
                </div>
            )}
        </div>
    );
};

export default PokemonPage;
