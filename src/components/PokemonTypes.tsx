import React from 'react';

interface Type {
    type: {
        name: string;
    };
}

interface PokemonTypesProps {
    types: Type[];
}

const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => {
    return (
        <div>
            <h2>Types:</h2>
            <ul>
                {types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonTypes;
