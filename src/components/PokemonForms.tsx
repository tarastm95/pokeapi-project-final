import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchPokemonFormDetails } from '../store/pokemonSlice';

interface PokemonFormsProps {
    forms: { url: string; name: string }[];
}

const PokemonForms: React.FC<PokemonFormsProps> = ({ forms }) => {
    const dispatch: AppDispatch = useDispatch();
    const { pokemonForms, loading } = useSelector((state: RootState) => state.pokemon);

    const handleClick = (formUrl: string) => {
        if (!pokemonForms[formUrl]) {
            dispatch(fetchPokemonFormDetails(formUrl));
        }
    };

    return (
        <div>
            <h2>Pokemon Forms</h2>
            <div>
                {forms.map((form) => (
                    <button key={form.url} onClick={() => handleClick(form.url)}>
                        {`Show form ${form.name}`}
                    </button>
                ))}
            </div>
            {loading && <p>Loading...</p>}
            {forms.map((form) => {
                const selectedForm = pokemonForms[form.url];
                return (
                    selectedForm && (
                        <div key={form.url}>
                            <h3>{selectedForm.name}</h3>
                            <img src={selectedForm.sprites.front_default} alt={selectedForm.name} />
                            <img src={selectedForm.sprites.back_default} alt={`${selectedForm.name} back`} />
                            <img src={selectedForm.sprites.front_shiny} alt={`${selectedForm.name} shiny`} />
                            <img src={selectedForm.sprites.back_shiny} alt={`${selectedForm.name} shiny back`} />
                            <p><strong>Order:</strong> {selectedForm.order}</p>
                            <p><strong>Is Battle Only:</strong> {selectedForm.is_battle_only ? 'Yes' : 'No'}</p>
                            <p><strong>Is Default:</strong> {selectedForm.is_default ? 'Yes' : 'No'}</p>
                            <p><strong>Is Mega:</strong> {selectedForm.is_mega ? 'Yes' : 'No'}</p>
                            <p><strong>Form Order:</strong> {selectedForm.form_order}</p>
                            <p><strong>Version Group:</strong> {selectedForm.version_group?.name ?? 'N/A'}</p>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default PokemonForms;
