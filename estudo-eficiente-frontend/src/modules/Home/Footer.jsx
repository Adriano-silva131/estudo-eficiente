import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 md:px-8 w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold text-gray-800">
                Estudo Eficiente
              </h2>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              O Estudo Eficiente é um projeto desenvolvido por mim para auxilar
              os estudos de todo o Brasil, com o objetivo de ajudar os estudantes
              a se organizarem e terem um melhor desempenho nos estudos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Sobre o projeto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Politicas de privacidade</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>adriano_silva131@outlook.com</li>
              <li>Bento gonçalves, Rio Grande do Sul, Brasil</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          Estudo Eficiente Todos os direitos reservados, 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
