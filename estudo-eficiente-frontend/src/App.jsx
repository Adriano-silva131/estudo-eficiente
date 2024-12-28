import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Home/Layout";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
      <ToastContainer/>
    </Router>
  );
}

export default App;
