import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <span>
                <NavLink to={'/'}>Main Page</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'favorite'}>Favorite pokemons</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'search-by-type'}>Search by type</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'search-by-ability'}>Search by ability</NavLink>
            </span>&emsp;
            <span>
                <NavLink to={'search-by-name'}>Search by name</NavLink>
            </span>
        </div>
    );
};

export default HeaderComponent;
