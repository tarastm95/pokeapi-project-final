import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Імпортуємо Link з react-router-dom
import { AppDispatch, RootState } from '../store/store';
import { fetchPokemonByName } from '../store/searchSlice';

const SearchByName: React.FC = () => {
    const [name, setName] = useState('');
    const dispatch: AppDispatch = useDispatch();
    const { searchResults, loading, error } = useSelector((state: RootState) => state.search);

    const handleSearch = () => {
        dispatch(fetchPokemonByName(name));
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Pokemon Name"
            />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {searchResults.map((pokemon) => (
                <div key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchByName;
