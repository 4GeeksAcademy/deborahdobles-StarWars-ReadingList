import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const CardVehicle = (props) => {
    const { actions } = useContext(Context);

    function sendFavorite(e) {
        e.preventDefault();
        actions.addFavorite(props.nameVehicle);
    }

    return (
        <div className="">
            <div className="card" style={{ width: 300 }}>
                <img src="https://i.pinimg.com/originals/df/19/8c/df198cd9032d8287c03e9b348b2e674a.jpg" className="card-img-top" alt="vehicle" />
                <div className="card-body">
                    <h5 className="card-title">{props.nameVehicle}</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-outline-primary">
                            Learn more!
                        </a>
                        <a onClick={sendFavorite} href="#" className="btn btn-outline-warning">
                            <i className="fa fa-heart" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};