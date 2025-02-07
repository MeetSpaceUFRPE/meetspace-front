import api from "./api";

export const createBooking = async (booking) => {
    try {
        const access_token = localStorage.getItem("access_token");
        let { salaId, data, turno } = booking;
        salaId = parseInt(salaId);
        console.log("Criando reserva:", booking);
        const response = await api.post("/api/reservations/create", {
            salaId,
            data,
            turno,
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar reservas:", error);
        throw error;
    }
};

export const getUserBookings = async () => {
    try {
        const access_token = localStorage.getItem("access_token");
        const response = await api.get("/api/reservations/user", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar reservas:", error);
        throw error;
    }
}

export const cancelBooking = async (id) => {
    try {
        const access_token = localStorage.getItem("access_token");
        const response = await api.delete(`/api/reservations/cancel/${id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao cancelar reserva:", error);
        throw error;
    }
}
