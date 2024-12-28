import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  faUserGraduate,
  faGear,
  faBookOpen,
  faRightFromBracket,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/UseApiHook";
import { toast } from "react-toastify";

const Sidebar = ({ isCollapsed }) => {
  const { logout } = useContext(AuthContext);
  const { fetchData, loading, error } = useApi("/api/logout", "POST");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetchData();
    logout();

    toast.success("Deslogado com sucesso!");

    navigate("/login");
  };

  return (
    <div
      className={`bg-white h-screen p-5 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <nav>
        <Link
          to="/"
          className="mb-4 p-2 flex items-center text-black text-xl font-bold"
        >
          ES
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faChartLine} style={{ color: "#0ea5e9" }} />
          {!isCollapsed && <span className="ml-2">Dashboard</span>}
        </Link>
        <Link
          to="/usuario"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faUserGraduate} style={{ color: "#0ea5e9" }} />
          {!isCollapsed && <span className="ml-2 text-black">Usuário</span>}
        </Link>
        <Link
          to="/configuracao"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faGear} style={{ color: "#0ea5e9" }} />
          {!isCollapsed && <span className="ml-2">Configuração do estudo</span>}
        </Link>
        <Link
          to="/materia"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faBookOpen} style={{ color: "#0ea5e9" }} />
          {!isCollapsed && <span className="ml-2">Matérias</span>}
        </Link>
      </nav>
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: "#0ea5e9" }}
          />
          <span className={`${isCollapsed ? "hidden" : "block"} ml-2`}>
            Sair
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
