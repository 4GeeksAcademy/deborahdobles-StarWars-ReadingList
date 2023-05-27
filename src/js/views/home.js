import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { cardCharacter } from "../component/cardCharacter";
import { cardPlanet } from "../component/cardPlanet";
import { cardVehicle } from "../component/cardVehicle";
import { Favorites } from "../component/favorites";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	useEffect(() => {
		actions.obtainCharacter();
		actions.obtainPlanet();
		actions.obtainVehicle();
	}, []);

return (
	<div className="">
	<div className="ms-3">
		<h1 className="text-danger m-3">Characters</h1>
		<div id="characterContainer" className="d-flex overflow-auto col-6 w-75">{store.character.map((item, index) => ( 
		<cardCharacter key={index} nameCharacter={item.name}
			/>
		))}</div>
	</div>
	<div className="ms-3">
		<h1 className="text-danger m-3">Planets</h1>
		<div id="planetContainer" className="d-flex overflow-auto col-6 w-75">{store.planet.map((item, index) => ( 
		<cardPlanet key={index} namePlanet={item.name}
			/>
		))}</div>
	</div>
	<div className="ms-3">
		<h1 className="text-danger m-3">Vehicles</h1>
		<div id="vehicleContainer" className="d-flex overflow-auto col-6 w-75">{store.vehicle.map((item, index) => ( 
		<cardvehicle key={index} nameVehicle={item.name}
			/>
		))}</div>
	</div>

	</div>
);
}
