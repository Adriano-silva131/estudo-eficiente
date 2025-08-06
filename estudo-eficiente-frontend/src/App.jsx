import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { AuthProvider } from "../src/context/AuthContext";

function App() {
    return (
        <Router>
            <AuthProvider>
                <AppRoutes/>
                <ToastContainer/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </AuthProvider>
        </Router>
    );
}

export default App;
