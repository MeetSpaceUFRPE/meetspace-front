import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Modal, Divider } from 'antd';
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import { getPerfil, updatePerfil, deletePerfil } from '../../services/perfilService';

const Perfil = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const loadPerfil = async () => {
    try {
      const response = await getPerfil(); 
      const { name, email, department } = response; 
      setName(name || 'Erro ao carregar nome');
      setEmail(email || 'Erro ao carregar email');
      setDepartment(department || 'Erro ao carregar departamento');
    } catch (err) {
      alert(err.message || 'Erro ao carregar perfil');
    }
  };

  useEffect(() => {
    loadPerfil();
  }, []);

  const handleSubmit = async () => {
    if (password !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    setLoading(true);

    try {
      const userProfileData = {
        name,
        email,
        department,
        password,
      };
      await updatePerfil(userProfileData);
      alert('Perfil atualizado com sucesso!');
    } catch (err) {
      alert(err.message || 'Erro ao atualizar o perfil');
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const handleDelete = async () => {
    Modal.confirm({
      title: 'Tem certeza que deseja excluir seu perfil?',
      content: 'Essa ação não pode ser desfeita.',
      okText: 'Sim',
      cancelText: 'Cancelar',
      onOk: async () => {
        try {
          await deletePerfil(password);
          alert('Perfil excluído com sucesso!');
          navigate('/login');
        } catch (err) {
          alert(err.message || 'Erro ao excluir o perfil');
        }
      },
    });
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <ButtonBack path="/home" style="fixed top-24 left-4 z-50" />
      <Header sectionName="Editar Perfil" />
      
      <h1 className="text-2xl font-semibold mb-6">Editar Perfil</h1>
      
      <div 
        className="w-80 space-y-4"
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}  
      >
        <Input
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          placeholder="Departamento"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded"
        />
        <Input.Password
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <Divider className='my-4'>ou</Divider>

        <p className="text-center text-sm text-gray-500">
          Zona de perigo! Essa ação não pode ser desfeita.
        </p>
        <Input.Password
          placeholder="Digite sua senha para confirmar"
          className="rounded mt-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="primary"
          danger
          className="w-full"
          onClick={handleDelete}
        >
          Excluir perfil
        </Button>
      </div>
    </div>
  );
};

export default Perfil;
