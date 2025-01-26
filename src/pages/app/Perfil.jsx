import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import { updatePerfil } from '../../services/perfilService'; 
import { getPerfil } from '../../services/perfilService';

const Perfil = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const loadPerfil = async () => {
    try {
      const response = await getPerfil(); 
      const { nome, email, dataNascimento } = response; 
      setNome(nome || 'Erro no nome');
      setEmail(email || 'erro@gmail.com');
      setDataNascimento(dataNascimento || '1990-01-01');
    } catch (err) {
      setNome('Erro no nome');
      setEmail('erro@gmail.com');
      setDataNascimento('1990-01-01');
    }
  };

  useEffect(() => {
    loadPerfil();
  }, []);

  const handleSubmit = async () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    setLoading(true);

    try {
      const userProfileData = {
        nome,
        email,
        dataNascimento,
        senha,
      };
      await updatePerfil(userProfileData);
      alert('Perfil atualizado com sucesso!');
    } catch (err) {
      alert(err.message || 'Erro ao atualizar o perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <ButtonBack path="/home" style="fixed top-24 left-4 z-50" />
      <Header sectionName="Editar Perfil" />
      
      <h1 className="text-2xl font-semibold mb-6">Editar Perfil</h1>
      
      <div className="w-80 space-y-4">
        <Input
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="rounded"
        />
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded"
        />
        <Input
          type="date"
          placeholder="Data de nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          className="rounded"
        />
        <Input.Password
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="rounded"
        />
        <Input.Password
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          className="rounded"
        />
        
        <Button
          type="primary"
          className="w-full bg-red-600 hover:bg-red-500"
          onClick={handleSubmit}
          loading={loading}
        >
          Atualizar perfil
        </Button>
      </div>
    </div>
  );
};

export default Perfil;
