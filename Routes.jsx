import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SplashScreen from './src/pages/dashboard/SplashScreen';

import Login from './src/pages/auth/login/Login';
import RecuperarSenha from './src/pages/auth/login/RecuperarSenha';
import RedefinirSenha from './src/pages/auth/login/RedefinirSenha';

import Cadastro from './src/pages/auth/cadastro/Cadastro';

import Home from './src/pages/app/Home';
import Salas from './src/pages/app/Salas';
import Reservas from './src/pages/app/Reservas';
import Perfil from './src/pages/app/Perfil';
import NotFound from './src/pages/NotFound';
import CriarSala from './src/pages/app/CriarSala';
import DetalheDaSala from './src/pages/app/DetalheDaSala';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/auth/redefinir-senha" element={<RedefinirSenha />} />
        <Route path="/auth/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/salas" element={<Salas />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/criar-sala" element={<CriarSala />} />
        <Route path="/detalhe-da-sala" element={<DetalheDaSala />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;