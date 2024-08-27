import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import PokemonList from '../components/PokemonList';

const FavoritePage: React.FC = () => {
    const favoritePokemons = useSelector((state: RootState) => state.pokemon.favoritePokemons);

    return (
        <div>
            <h1>Favorite Pokémon</h1>
            {favoritePokemons.length === 0 ? (
                <p>No favorite Pokémon.</p>
            ) : (
                <div>
                    {favoritePokemons.map(pokemon => (
                        <PokemonList key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritePage;
