export interface Pokemon {
    name: string;
    url: string;
    id: number;
    image: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export interface PokemonAbility {
    ability: {
        name: string;
        url: string;
    };
}

export interface PokemonType {
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface PokemonForm {
    name: string;
    url: string;
}

export interface PokemonFormDetails {
    sprites: {
        front_default: string;
        back_default?: string;
        front_shiny?: string;
        back_shiny?: string;
        other?: {
            dream_world?: {
                front_default: string;
            };
            'official-artwork'?: {
                front_default: string;
            };
        };
    };
    name: string;
    order?: number;
    is_battle_only?: boolean;
    is_default?: boolean;
    is_mega?: boolean;
    form_order?: number;
    version_group?: {
        name: string;
    };
    form_name?: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    abilities: { ability: { name: string } }[];
    stats: { stat: { name: string }; base_stat: number }[];
    types: { type: { name: string } }[];
    sprites: {
        front_default: string;
    };
    forms: { url: string; name: string }[];
}

export interface PokemonFormDetails {
    id: number;
    name: string;
}
