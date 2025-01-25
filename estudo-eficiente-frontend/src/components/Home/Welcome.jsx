import React from "react";
import logo from "../../assets/alunos.png";
import vetores from "../../assets/vetores.png";

const Welcome = () => {
  return (
    <div className="relative mx-auto px-4 sm:px-6 md:px-8">
      <div
        className="relative bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${vetores})` }}
      >
        <div className="py-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Bem-vindo ao Estudo Eficiente, o seu aplicativo de estudos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Aqui você encontra um ambiente de estudos personalizado, com
              ferramentas para te ajudar a organizar o seu tempo e focar no que
              realmente importa: o aprendizado.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
