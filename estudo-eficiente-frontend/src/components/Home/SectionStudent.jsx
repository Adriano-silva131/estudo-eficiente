import React from "react";
import jovens from "../../assets/jovens.png";
import heart from "../../assets/Svg/orange_heart.svg";
import puzzle from "../../assets/Svg/orange_puzzle.svg";
import styles from "../Home/Home.module.css"

const SectionStudent = () => {
    return (
        <div className={styles.background__color}>
            <div className="relative mx-auto px-4 sm:px-6 md:px-8 w-full">
                <div className="py-16 flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={jovens}
                            alt="Logo"
                            className="w-full max-w-md lg:max-w-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl sm:text-5xl font-bold text-stone-100 leading-tight">
                            Uma experiencia <span className="text-orange-400">premium de estudos</span> , feita para você. Estudos que vão
                            de encontro com a <span className="text-orange-400">sua realidade.</span>
                        </h2>
                        <div className="mt-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <img src={heart} alt="Um coração" className="w-16 h-16"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-stone-100">
                                        Facilidade ao usar plataforma
                                    </h3>
                                    <p className="text-gray-600">
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={puzzle} alt="Um coração" className="w-16 h-16"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-stone-100">
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
        </div>

    );
};

export default SectionStudent;
