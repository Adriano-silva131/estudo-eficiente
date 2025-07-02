import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

function App() {
    return (
        <Router>
            <AppRoutes/>
            <ToastContainer/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </Router>
    );
}

export default App;
