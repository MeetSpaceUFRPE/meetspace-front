import React from "react";
import arrowleft from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const BackButton = ({ path, style }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(path)}
        className={`flex items-center p-2 rounded-full bg-transparent border-gray-500 border-2 text-gray-800 hover:bg-gray-100 ${style}`}
      >
        <img src={arrowleft} alt="Voltar" className="w-4 h-4 sm:w-6 sm:h-6" />
        <span className="text-sm sm:text-base"></span>
      </button>
    </div>
  );
};

export default BackButton;