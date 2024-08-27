import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import MainLayout from './layouts/MainLayout';
import FavoritePage from './pages/FavoritePage';
import PokemonsPage from './pages/PokemonsPage';
import ErrorLayout from './layouts/ErrorLayout';
import PokemonPage from "./pages/PokemonPage";
import SearchByAbility from "./components/SearchByAbility";
import SearchByName from "./components/SearchByName";
import SearchByType from "./components/SearchByType";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([{
    path: "/", element: <MainLayout/>, errorElement: <ErrorLayout/>, children: [
        {path: "favorite", element: <FavoritePage/>},
        {path: "pokemons", element: <PokemonsPage/>},
        {
            path: "search-by-type", element: <SearchByType/>
        }, {
            path: "search-by-ability", element: <SearchByAbility/>
        }, {
            path: "search-by-name", element: <SearchByName/>
        },
        {path: "pokemon/:id", element: <PokemonPage/>},
        {element: <PokemonsPage/>, index: true}
    ]
}]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

reportWebVitals();
