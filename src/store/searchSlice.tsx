import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pokemon } from '../types/pokemon';

interface SearchState {
    searchResults: Pokemon[];
    pokemonsByType: Pokemon[];
    pokemonsByAbility: Pokemon[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    searchResults: [],
    pokemonsByType: [],
    pokemonsByAbility: [],
    loading: false,
    error: null,
};

export const fetchPokemonByName = createAsyncThunk(
    'search/fetchPokemonByName',
    async (name: string) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    }
);

export const fetchPokemonByType = createAsyncThunk(
    'search/fetchPokemonByType',
    async (type: string) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        return response.data.pokemon.map((p: { pokemon: Pokemon }) => p.pokemon);
    }
);

export const fetchPokemonByAbility = createAsyncThunk(
    'search/fetchPokemonByAbility',
    async (ability: string) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
        return response.data.pokemon.map((p: { pokemon: Pokemon }) => p.pokemon);
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearSearchResults: (state) => {
            state.searchResults = [];
            state.pokemonsByType = [];
            state.pokemonsByAbility = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonByName.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonByName.fulfilled, (state, action: PayloadAction<Pokemon>) => {
                state.loading = false;
                state.searchResults = [action.payload];
            })
            .addCase(fetchPokemonByName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch pokemon by name';
            })
            .addCase(fetchPokemonByType.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonByType.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
                state.loading = false;
                state.pokemonsByType = action.payload;
                state.searchResults = action.payload;
            })
            .addCase(fetchPokemonByType.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch pokemon by type';
            })
            .addCase(fetchPokemonByAbility.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonByAbility.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
                state.loading = false;
                state.pokemonsByAbility = action.payload;
                state.searchResults = action.payload;
            })
            .addCase(fetchPokemonByAbility.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch pokemon by ability';
            });
    }
});

export const { clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
