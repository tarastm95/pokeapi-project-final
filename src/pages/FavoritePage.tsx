// pages/FavoritePage.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Імпортуйте тип RootState з вашого store
import PokemonList from '../components/PokemonList'; // Ваш компонент для відображення покемона

const FavoritePage: React.FC = () => {
    // Отримання улюблених покемонів з Redux Store
    const favoritePokemons = useSelector((state: RootState) => state.pokemon.favoritePokemons);

    return (
        <div>
            <h1>Улюблені покемони</h1>
            {favoritePokemons.length === 0 ? (
                <p>Немає улюблених покемонів.</p>
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
