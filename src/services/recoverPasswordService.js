import api from "./api";

export const recuperarSenha = async (email) => {
  try {
    const response = await api.post("/auth/recover-password", { email }); // Endpoint para recuperação de senha
    return response.data;
  } catch (error) {
    console.error("Erro ao recuperar senha:", error);
    throw error;
  }
};
