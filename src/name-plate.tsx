import {nameStore} from "./store.ts";

const NamePlate = () => {
    console.log("NamePlate Render", new Date().getTime());
    return (
        <p>
            Your name is: {nameStore} <br/>
        </p>
    );
};

export default NamePlate;