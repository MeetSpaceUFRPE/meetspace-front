import api from './api'; // Importando a instância do axios configurada

// Função para obter os dados do perfil
export const getPerfil = async () => {
  try {
    const response = await api.get('/perfil'); // Faz a requisição GET para o endpoint /perfil
    return response.data; // Retorna os dados do perfil
  } catch (error) {
    throw new Error('Erro ao obter os dados do perfil');
  }
};

// Função para atualizar os dados do perfil
export const updatePerfil = async (perfilData) => {
  try {
    const response = await api.post('/perfil', perfilData); // Faz a requisição POST para atualizar o perfil
    return response.data; // Retorna os dados atualizados do perfil (ou confirmação)
  } catch (error) {
    throw new Error('Erro ao atualizar o perfil');
  }
};
