// services/api.ts
import axios from 'axios';

// Створення інстанса axios з базовим URL
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export default api;
