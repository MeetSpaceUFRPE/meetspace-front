import api from "./api";

export const checkAvailability = async (salaId, data) => {
  try {
    const turnos = ["manha", "tarde", "noite"];
    const availability = [];
    for (let turno of turnos) {
        const response = await api.get(`/api/disponivel/${salaId}/${turno}/${data}`);
        availability.push({
            turno,
            disponivel: response.data
        });
    }
    return availability;
  } catch (error) {
    console.error("Erro ao verificar disponibilidade:", error);
    throw error;
  }
};