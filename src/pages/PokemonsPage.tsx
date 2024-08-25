import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, setPage } from '../store/pokemonSlice';
import { RootState, AppDispatch } from '../store/store';
import React, { useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const PokemonsPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { pokemons, page, loading, error, totalPages } = useSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemons(page));
    }, [dispatch, page]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {pokemons.map((pokemon) => (
                <PokemonList key={pokemon.id} pokemon={pokemon} />
            ))}
            <Pagination
                current={page}
                total={totalPages * 20}
                pageSize={20}
                onChange={(newPage) => dispatch(setPage(newPage))}
            />
        </div>
    );
};

export default PokemonsPage;
