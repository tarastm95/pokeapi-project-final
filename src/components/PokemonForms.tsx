// components/PokemonForms.tsx

import React, { useState } from 'react';
import { PokemonFormDetails } from '../types/pokemon';
import { getPokemonForm } from '../services/pokemonService';

interface PokemonFormsProps {
    forms: { url: string; name: string }[];
}

const PokemonForms: React.FC<PokemonFormsProps> = ({ forms }) => {
    const [selectedForm, setSelectedForm] = useState<PokemonFormDetails | null>(null);

    const handleClick = async (formUrl: string) => {
        const formDetails = await getPokemonForm(formUrl);
        setSelectedForm(formDetails);
    };

    return (
        <div>
            <h2>Форми покемона</h2>
            <div>
                {forms.map((form) => (
                    <button key={form.url} onClick={() => handleClick(form.url)}>
                        {form.name}
                    </button>
                ))}
            </div>
            {selectedForm && (
                <div>
                    <h3>{selectedForm.name}</h3>
                    <img src={selectedForm.sprites.front_default} alt={selectedForm.name} />
                    {/* Додайте інші деталі форми */}
                </div>
            )}
        </div>
    );
};

export default PokemonForms;
