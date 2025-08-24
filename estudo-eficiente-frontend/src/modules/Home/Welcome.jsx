import React from "react";
import logo from "../../assets/alunos.png";

const Welcome = () => {
  return (
      <div className="relative m-8 mb-16 px-4 sm:px-6 md:px-8">
        <div className="py-16 h-[380px] flex flex-col lg:flex-row items-center bg-purple-500 rounded-lg">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight ml-5">
              Bem-vindo ao Estudo Eficiente, o seu aplicativo de estudos
            </h2>
            <p className="mt-4 text-lg text-white ml-5">
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
  );
};

export default Welcome;
