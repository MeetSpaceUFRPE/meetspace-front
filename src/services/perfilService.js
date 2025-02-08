import api from './api'; // Importando a instância do axios configurada

// Função para obter os dados do perfil
export const getPerfil = async () => {
  try {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) throw new Error('Token de acesso não encontrado');
    const token = access_token.split('.')[1];
    const decoded = atob(token);
    const { id } = JSON.parse(decoded);

    const response = await api.get(`/api/users/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os dados do perfil');
  }
};

// Função para atualizar os dados do perfil
export const updatePerfil = async (perfilData) => {
  try {
    const { name, email, department, password } = perfilData;
    const access_token = localStorage.getItem('access_token');
    if (!access_token) throw new Error('Token de acesso não encontrado');
  
    const response = await api.put('/api/users/users', {
      name,
      email,
      department,
      password,
    }, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o perfil');
  }
};

export const deletePerfil = async (password) => {
  try {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) throw new Error('Token de acesso não encontrado');
    const response = await api.delete('/api/users/users', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        password,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao excluir o perfil');
  }
};