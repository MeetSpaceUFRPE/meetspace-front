import api from "./api";

export const createRoom = async (roomData) => {
    try {
        const access_token = localStorage.getItem("access_token");
        const {
            nome,
            capacidade,
            localizacao,
            recursos,
        } = roomData;
        const response = await api.post("/api/salas/create", {
            nome,
            capacidade,
            localizacao,
            recursos,
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar sala:", error);
        throw error;
    }
};

export const getRooms = async () => {
    try {
        const response = await api.get("/api/salas/get");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar salas:", error);
        throw error;
    }
}

export const deleteRoom = async (id) => {
    try {
        const access_token = localStorage.getItem("access_token");
        const response = await api.delete(`/api/salas/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar sala:", error);
        throw error;
    }
}