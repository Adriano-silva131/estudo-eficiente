import {Outlet} from "react-router-dom";
import NavbarApplication from "../Header/NavbarApplication.jsx"

function PrivateLayout() {
    return (
        <>
            <NavbarApplication/>
            <Outlet/>
        </>
    );
}

export default PrivateLayout;