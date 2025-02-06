import api from "./api";

export const cadastrarUsuario = async (userData) => {
  try {
    const { name, email, password, department } = userData;
    const response = await api.post("/api/auth/auth/register", {
      name,
      email,
      password,
      department,
    }); // Endpoint para cadastro
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};
