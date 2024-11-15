import React, { useContext, useState } from "react";
import Navbar from "../Header/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { AuthContext } from "../../context/AuthContext"; // Importando o AuthContext

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { isAuthenticated } = useContext(AuthContext); // Pegando o estado de autenticação

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      {isAuthenticated && ( // Condicionando a exibição da Sidebar ao estado de login
        <div className={`transition-all duration-300 ${isSidebarCollapsed ? "w-16" : "w-64"}`}>
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            toggleSidebar={toggleSidebar}
          />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
