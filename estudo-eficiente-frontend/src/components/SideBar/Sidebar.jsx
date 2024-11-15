import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUserGraduate,
  faGear,
  faBookOpen,
  faRightFromBracket,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isCollapsed }) => {

  return (
    <div
      className={`bg-white h-screen p-5 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* botão encolher */}
      {/* menus */}
      <nav>
        <Link to="/" className="mb-4 p-2 flex items-center text-black text-xl font-bold">
         ES
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faChartLine} style={{ color: '#0ea5e9' }}/>
          {!isCollapsed && <span className="ml-2">Dashboard</span>}
        </Link>
        <Link
          to="/usuario"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faUserGraduate} style={{ color: '#0ea5e9' }} />
          {!isCollapsed && <span className="ml-2 text-black">Usuário</span>}
        </Link>
        <Link
          to="/configuracao"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faGear} style={{ color: '#0ea5e9' }} />
          {!isCollapsed && <span className="ml-2">Configuração do estudo</span>}
        </Link>
        <Link
          href="/materia"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faBookOpen} style={{ color: '#0ea5e9' }}/>
          {!isCollapsed && <span className="ml-2">Matérias</span>}
        </Link>
      </nav>
      {/* Botão sair */}
      <div className="mt-8">
        <Link
          to="/logout"
          className="flex items-center hover:text-white mb-4 p-2 rounded hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#0ea5e9' }}/>
          <span className={`${isCollapsed ? "hidden" : "block"} ml-2`}>
            Sair
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
