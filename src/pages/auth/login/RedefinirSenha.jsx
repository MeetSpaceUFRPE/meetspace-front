import React, { useState } from "react";
import { Input, Button, notification } from "antd";
import { redefinirSenha } from "../../../services/resetPasswordService";

const RedefinirSenha = () => {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRedefinirSenha = async () => {
    if (!novaSenha || !confirmarSenha) {
      notification.warning({
        message: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        placement: "bottom",
      });
      return;
    }

    if (novaSenha !== confirmarSenha) {
      notification.error({
        message: "Erro de validação",
        description: "As senhas não coincidem.",
        placement: "bottom",
      });
      return;
    }

    if (novaSenha.length < 8) {
      notification.warning({
        message: "Senha muito curta",
        description: "A senha deve ter pelo menos 8 caracteres.",
        placement: "bottom",
      });
      return;
    }

    setLoading(true);
    try {
      await redefinirSenha(novaSenha);
      notification.success({
        message: "Sucesso",
        description: "Senha redefinida com sucesso!",
        placement: "bottom",
      });
      // Redirecionar para login ou página inicial
    } catch (error) {
      notification.error({
        message: "Erro",
        description: "Erro ao redefinir senha. Tente novamente.",
        placement: "bottom",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold mb-6">Redefinir senha</h1>
      <div className="w-80 space-y-4">
        <Input.Password
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          className="rounded"
        />
        <Input.Password
          placeholder="Confirmar nova senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          className="rounded"
        />
        <Button
          type="primary"
          className="w-full bg-red-600 hover:bg-red-500"
          onClick={handleRedefinirSenha}
          loading={loading} // Indicador de carregamento
        >
          Redefinir senha
        </Button>
      </div>
    </div>
  );
};

export default RedefinirSenha;
