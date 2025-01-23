// src/services/resetPasswordService.js
import api from "./api";

export const redefinirSenha = async (novaSenha, confirmarSenha) => {
  try {
    const response = await api.post("/auth/reset-password", { novaSenha, confirmarSenha }); // Endpoint para redefinir senha
    return response.data;
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
    throw error;
  }
};
