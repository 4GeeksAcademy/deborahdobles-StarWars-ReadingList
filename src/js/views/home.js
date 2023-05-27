import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardCharacter } from "../components/cardCharacter.js";
import { CardPlanet } from "../components/cardPlanet.js";
import { CardVehicle } from "../components/cardVehicle.js";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1>Home</h1>
            <div className="row">
                {store.charactersList.map((character, index) => {
                    return <CardCharacter key={index} nameCharacter={character.name} />;
                })}
            </div>
            <div className="row">
                {store.planetsList.map((planet, index) => {
                    return <CardPlanet key={index} namePlanet={planet.name} />;
                })}
            </div>
            <div className="row">
                {store.vehiclesList.map((vehicle, index) => {
                    return <CardVehicle key={index} nameVehicle={vehicle.name} />;
                })}
            </div>
        </div>
    );
};
