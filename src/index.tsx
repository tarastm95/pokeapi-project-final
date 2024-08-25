import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Переконайтесь, що store експортується з цього файлу
import MainLayout from './layouts/MainLayout';
import FavoritePage from './pages/FavoritePage';
import PokemonsPage from './pages/PokemonsPage';
import SearchPage from './pages/SearchPage';
import ErrorLayout from './layouts/ErrorLayout';
import PokemonPage from "./pages/PokemonPage";

// Створення кореневого елемента
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Налаштування маршрутизатора
const router = createBrowserRouter([{
    path: "/", element: <MainLayout/>, errorElement: <ErrorLayout/>, children: [
        { path: "favorite", element: <FavoritePage/> },
        { path: "pokemons", element: <PokemonsPage/> },
        { path: "search", element: <SearchPage/> },
        { path: "pokemon/:id", element: <PokemonPage/> },
        { element: <PokemonsPage/>, index: true }
    ]
}]);

// Рендеринг кореневого елемента
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

// Якщо ви хочете почати вимірювання продуктивності у вашому додатку,
// передайте функцію для запису результатів (наприклад: reportWebVitals(console.log))
// або надішліть до аналітичного кінцевого пункту. Дізнайтесь більше: https://bit.ly/CRA-vitals
reportWebVitals();
