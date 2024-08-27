import React from 'react';

interface Ability {
    ability: {
        name: string;
    };
}

interface PokemonAbilitiesProps {
    abilities: Ability[];
}

const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ abilities }) => {
    return (
        <div>
            <h2>Abilities:</h2>
            <ul>
                {abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonAbilities;
