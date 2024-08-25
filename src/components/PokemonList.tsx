// components/PokemonList.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pokemon } from '../types/pokemon';
import { addFavorite } from '../store/pokemonSlice';

interface PokemonListProps {
    pokemon: Pokemon;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addFavorite(pokemon));
    };

    return (
        <div>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
            <Link to={`/pokemon/${pokemon.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default PokemonList;
