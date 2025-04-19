import {Outlet} from "react-router-dom";
import Navbar from '../Header/Navbar'
import App from "../../App.jsx";

function PublicLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default PublicLayout;