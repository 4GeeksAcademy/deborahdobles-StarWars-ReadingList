import { AppContext } from "./appContext.js";

export const Flux = (props) => {
    return (
        <AppContext>
            {props.children}
        </AppContext>
    );
};

