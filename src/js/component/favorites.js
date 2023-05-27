import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    function deleteFavorite(index) {
        actions.deleteFavorite(index);
    }

    return (
        <div className="container">
            <h1>Favorites</h1>
            {store.favoritesList.map((favorite, index) => {
                return (
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{favorite}</h5>
                            <a onClick={() => deleteFavorite(index)} href="#" className="btn btn-outline-danger">
                                Delete
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
