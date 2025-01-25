import React from "react";
import jovens from "../../assets/jovens.png";
import icon from "../../assets/Svg/Heart.svg";
import puzzle from "../../assets/Svg/Puzzle.svg";
const SectionStudent = () => {
  return (
    <div className="relative mx-auto px-4 sm:px-6 md:px-8 w-full bg-white">
      <div className="py-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={jovens}
            alt="Logo"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Uma experiencia premium de estudos, feita para você. Estudos que vão
            de encontro com a sua realidade.
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <img src={icon} alt="Um coração" className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Facilidade ao usar plataforma
                </h3>
                <p className="text-gray-600">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={puzzle} alt="Um coração" className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Experiencia de estudo
                </h3>
                <p className="text-gray-600">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStudent;
