import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const CardCharacter = (props) => {
    const { actions } = useContext(Context);

    function sendFavorite(e) {
        e.preventDefault();
        actions.addFavorite(props.nameCharacter);
    }

    return (
        <div className="">
            <div className="card" style={{ width: 300 }}>
                <img src="https://media.timeout.com/images/105863223/image.jpg" className="card-img-top" alt="character" />
                <div className="card-body">
                    <h5 className="card-title">{props.nameCharacter}</h5>
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
