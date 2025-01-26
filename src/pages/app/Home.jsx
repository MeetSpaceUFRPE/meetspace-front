import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, UserOutlined, CalendarOutlined, TeamOutlined } from '@ant-design/icons'; // Ícones do Ant Design
import Header from '../../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Adicionando Header com espaçamento abaixo */}
      <Header sectionName={"Home"} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 justify-center">
        {/* Card de Salas */}
        <Card
          className="rounded-lg shadow-lg hover:shadow-2xl transition-all"
          hoverable
        >
          <Link to="/salas" className="flex items-center space-x-4 text-lg font-semibold text-gray-800 hover:text-red-500">
            <AppstoreOutlined style={{ fontSize: '36px' }} className="bg-[#D84040] p-2 rounded-full text-white" />
            <span>Salas</span>
            <span className="ml-auto text-red-500">&#62;</span> {/* Ícone de seta para a direita */}
          </Link>
        </Card>
        
        {/* Card de Reservas */}
        <Card
          className="rounded-lg shadow-lg hover:shadow-2xl transition-all"
          hoverable
        >
          <Link to="/reservas" className="flex items-center space-x-4 text-lg font-semibold text-gray-800 hover:text-blue-500">
            <CalendarOutlined style={{ fontSize: '36px' }} className="bg-[#D84040] p-2 rounded-full text-white" />
            <span>Suas Reservas</span>
            <span className="ml-auto text-blue-500">&#62;</span> {/* Ícone de seta para a direita */}
          </Link>
        </Card>
        
        {/* Card para Cadastrar Sala */}
        <Card
          className="rounded-lg shadow-lg hover:shadow-2xl transition-all"
          hoverable
        >
          <Link to="/criar-sala" className="flex items-center space-x-4 text-lg font-semibold text-gray-800 hover:text-green-500">
            <TeamOutlined style={{ fontSize: '36px' }} className="bg-[#D84040] p-2 rounded-full text-white" />
            <span>Cadastrar Sala</span>
            <span className="ml-auto text-green-500">&#62;</span> {/* Ícone de seta para a direita */}
          </Link>
        </Card>
        
        {/* Card de Perfil */}
        <Card
          className="rounded-lg shadow-lg hover:shadow-2xl transition-all"
          hoverable
        >
          <Link to="/perfil" className="flex items-center space-x-4 text-lg font-semibold text-gray-800 hover:text-indigo-500">
            <UserOutlined style={{ fontSize: '36px' }} className="bg-[#D84040] p-2 rounded-full text-white" />
            <span>Perfil</span>
            <span className="ml-auto text-indigo-500">&#62;</span> {/* Ícone de seta para a direita */}
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Home;
