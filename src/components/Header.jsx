import React from 'react';
import { BellOutlined } from '@ant-design/icons';  // Importando o ícone de sino do antd
import PropTypes from 'prop-types'; // Para garantir que o nome da seção seja passado como prop
import logo from '../assets/meetspace.svg'; // Importando a logo

const Header = ({ sectionName }) => {
  const handleLogout = () => {
    // Lógica para sair, pode ser implementação de redirecionamento ou limpeza de estado
    console.log('Saindo...');
  };

  return (
    <header className="fixed top-0 left-0 w-full p-2 bg-gray-800 text-white z-50">
      <div className="flex items-center justify-between">
        <div className='flex flex-row gap-4 items-center justify-center'>
            <img src={logo} alt="Logo" className="w-6" />
            <h1 className="text-xl font-semibold">{sectionName}</h1>
        </div> 
        <div className="flex items-center space-x-4">
          <BellOutlined style={{ fontSize: '24px' }} /> 
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  sectionName: PropTypes.string.isRequired, // Definindo que o nome da seção é obrigatório
};

export default Header;
