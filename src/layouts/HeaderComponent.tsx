import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <span>
                <NavLink to={'/'}>Main Page</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'pokemons'}>Pokemons</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'favorite'}>Favorite pokemons</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'search'}>Search</NavLink>
            </span>
        </div>
    );
};

export default HeaderComponent;
