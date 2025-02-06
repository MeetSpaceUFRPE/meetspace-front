import api from "./api";

export const loginUsuario = async (email, password) => {
  try {
    const response = await api.post("/api/auth/auth/login", { email, password }); // Endpoint para login
    // recebe acess_token e armazena no localStorage
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
