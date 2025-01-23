import React, { useState } from "react";
import { Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
import { recuperarSenha } from "../../../services/recoverPasswordService";
import BackButton from "../../../components/ButtonBack";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRecuperarSenha = async () => {
    if (!email) {
      notification.warning({
        message: "Campo obrigatório",
        description: "Por favor, informe seu e-mail.",
        placement: "bottom",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notification.warning({
        message: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        placement: "bottom",
      });
      return;
    }

    setLoading(true);
    try {
      await recuperarSenha(email);
      notification.success({
        message: "E-mail enviado",
        description: "Instruções de recuperação enviadas para seu e-mail.",
        placement: "bottom",
      });
    } catch (error) {
      notification.error({
        message: "Erro",
        description: "Erro ao enviar link de recuperação. Tente novamente.",
        placement: "bottom",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <BackButton path={"/auth/login"} style="fixed top-24 left-4 z-50" />

      <h1 className="text-2xl font-semibold mb-6">Recuperar senha</h1>
      <p className="text-center mb-4">
        Informe o e-mail cadastrado e você receberá <br /> um link para
        redefinição de senha.
      </p>
      <div className="w-80 space-y-4">
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded"
        />
        <Button
          type="primary"
          className="w-full bg-red-600 hover:bg-red-500"
          onClick={handleRecuperarSenha}
          loading={loading} // Indicador de carregamento
        >
          Enviar
        </Button>
      </div>
      <Link to="/auth/login" className="text-red-500 block mt-4">
        Voltar ao login
      </Link>
    </div>
  );
};

export default RecuperarSenha;