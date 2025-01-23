import api from "./api";

export const cadastrarUsuario = async (userData) => {
  try {
    const response = await api.post("/auth/signup", userData); // Endpoint para cadastro
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};
