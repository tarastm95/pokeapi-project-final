import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        search: searchReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
