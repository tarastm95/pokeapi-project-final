import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../store/pokemonSlice';
import { RootState, AppDispatch } from '../store/store';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonTypes from '../components/PokemonTypes';
import PokemonStats from '../components/PokemonStats';
import PokemonForms from '../components/PokemonForms';

const PokemonPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { pokemonDetails, loading, error, pokemonForms } = useSelector((state: RootState) => state.pokemon);

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
                    <PokemonAbilities abilities={pokemon.abilities} />
                    <PokemonTypes types={pokemon.types} />
                    <PokemonStats stats={pokemon.stats} />
                    <PokemonForms forms={pokemon.forms} />
                </div>
            )}
        </div>
    );
};

export default PokemonPage;
