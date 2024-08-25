export interface Pokemon {
    name: string;
    url: string;
    id: number; // Ідентифікатор покемона
    image: string; // URL зображення покемона
}

export interface PokemonListResponse {
    count: number; // Загальна кількість покемонів
    next: string | null; // URL для наступної сторінки або null, якщо наступної сторінки немає
    previous: string | null; // URL для попередньої сторінки або null, якщо попередньої сторінки немає
    results: Pokemon[]; // Масив покемонів на поточній сторінці
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
    name: string;
    sprites: {
        front_default: string;
    };
    // Додайте інші поля, які вам потрібні
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
    forms: { url: string; name: string }[]; // Додайте це поле для форм
}
