import React, { useState } from "react";
import { Input, Button, Typography, DatePicker, notification } from "antd";
import BackButton from "../../../components/ButtonBack";
import { cadastrarUsuario } from "../../../services/signupService";
import { formatDate } from "../../../utils/formatDate";

const { Link } = Typography;

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState(null);
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Validações
    if (!nome || !email || !senha || !confirmarSenha || !dataNascimento) {
      notification.warning({
        message: "Campos obrigatórios",
        description: "Preencha todos os campos.",
        placement: "bottom",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      notification.warning({
        message: "E-mail inválido",
        description: "Insira um e-mail válido.",
        placement: "bottom",
      });
      return;
    }

    if (senha.length < 8) {
      notification.warning({
        message: "Senha muito curta",
        description: "A senha deve ter pelo menos 8 caracteres.",
        placement: "bottom",
      });
      return;
    }

    if (senha !== confirmarSenha) {
      notification.error({
        message: "Erro",
        description: "As senhas não coincidem.",
        placement: "bottom",
      });
      return;
    }

    const formattedDate = dataNascimento ? formatDate(dataNascimento) : null;

    const userData = {
      nome,
      email,
      dataNascimento: formattedDate,
      senha,
    };

    setLoading(true);
    try {
      await cadastrarUsuario(userData);
      notification.success({
        message: "Sucesso",
        description: "Conta criada com sucesso!",
        placement: "bottom",
      });
      // Redirecionar para login ou home
    } catch (error) {
      notification.error({
        message: "Erro",
        description: "Erro ao criar conta. Tente novamente.",
        placement: "bottom",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <BackButton path={"/auth/login"} style="fixed top-24 left-4 z-50" />

      <h1 className="text-2xl font-semibold mb-6">Crie uma conta</h1>
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
        <DatePicker
          placeholder="Data de nascimento"
          value={dataNascimento}
          onChange={(date) => setDataNascimento(date)}
          className="w-full rounded"
        />
        <Input.Password
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="rounded"
        />
        <Input.Password
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          className="rounded"
        />
        <Button
          type="primary"
          className="w-full bg-red-600 hover:bg-red-500"
          onClick={handleSubmit}
          loading={loading} // Indicador de carregamento
        >
          Criar conta
        </Button>
      </div>
      <p className="mt-4">
        Já possui uma conta?{" "}
        <Link to="/auth/login" className="text-red-500">
          Faça login
        </Link>
      </p>
    </div>
  );
};

export default Cadastro;