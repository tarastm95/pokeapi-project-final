import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getPokemons, getPokemonDetails, getPokemonForm } from '../services/pokemonService';
import { Pokemon, PokemonListResponse, PokemonDetails, PokemonFormDetails } from '../types/pokemon';

interface PokemonState {
    pokemons: Pokemon[];
    favoritePokemons: Pokemon[];
    pokemonDetails: { [id: number]: PokemonDetails };
    pokemonForms: { [url: string]: PokemonFormDetails | null };
    loading: boolean;
    page: number;
    totalPages: number;
    error: string | null;
}

const initialState: PokemonState = {
    pokemons: [],
    favoritePokemons: [],
    pokemonDetails: {},
    pokemonForms: {},
    loading: false,
    page: 1,
    totalPages: 1,
    error: null,
};

export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await getPokemons(page);
            return {
                results: response.results,
                totalPages: Math.ceil(response.count / 20),
            };
        } catch (error) {
            return rejectWithValue('Failed to fetch pokemons');
        }
    }
);

export const fetchPokemonDetails = createAsyncThunk(
    'pokemon/fetchPokemonDetails',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await getPokemonDetails(id.toString());
            return response;
        } catch (error) {
            return rejectWithValue('Failed to fetch pokemon details');
        }
    }
);

export const fetchPokemonFormDetails = createAsyncThunk(
    'pokemon/fetchPokemonFormDetails',
    async (formUrl: string, { rejectWithValue }) => {
        try {
            const response = await getPokemonForm(formUrl);
            return { formUrl, formDetails: response };
        } catch (error) {
            return rejectWithValue('Failed to fetch pokemon form details');
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        addFavorite(state, action: PayloadAction<Pokemon>) {
            state.favoritePokemons.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<number>) {
            state.favoritePokemons = state.favoritePokemons.filter(pokemon => pokemon.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemons = action.payload.results;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchPokemonDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemonDetails[action.payload.id] = action.payload;
            })
            .addCase(fetchPokemonDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchPokemonFormDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonFormDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemonForms[action.payload.formUrl] = action.payload.formDetails;
            })
            .addCase(fetchPokemonFormDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setPage, addFavorite, removeFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;
