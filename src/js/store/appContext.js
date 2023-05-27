import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const AppContext = (props) => {
    const [favoritesList, setFavoritesList] = useState([]);

    useEffect(() => {
        // Load favorites from local storage (if any)
        const favoritesFromStorage = localStorage.getItem("favoritesList");
        if (favoritesFromStorage) {
            setFavoritesList(JSON.parse(favoritesFromStorage));
        }
    }, []);

    useEffect(() => {
        // Save favorites to local storage
        localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
    }, [favoritesList]);

    const addFavorite = (favorite) => {
        setFavoritesList([...favoritesList, favorite]);
    };

    const deleteFavorite = (index) => {
        const updatedFavoritesList = favoritesList.filter((_, i) => i !== index);
        setFavoritesList(updatedFavoritesList);
    };

    const store = {
        favoritesList,
        addFavorite,
        deleteFavorite
    };

    return <Context.Provider value={{ store }}>{props.children}</Context.Provider>;
};
