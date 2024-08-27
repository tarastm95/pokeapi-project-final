import React from 'react';

interface Stat {
    base_stat: number;
    stat: {
        name: string;
    };
}

interface PokemonStatsProps {
    stats: Stat[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
    return (
        <div>
            <h2>Stats:</h2>
            <ul>
                {stats.map((stat) => (
                    <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonStats;
