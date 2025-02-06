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