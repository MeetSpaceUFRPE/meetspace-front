import api from "./api";

export const loginUsuario = async (email, senha) => {
  try {
    const response = await api.post("/auth/login", { email, senha }); // Endpoint para login
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
