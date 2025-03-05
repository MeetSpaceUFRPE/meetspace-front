import api from "./api";

export const getDailySchedule = async (salaId, data) => {
    try {
        const response = await api.get(`/api/calendar/schedule/${salaId}/${data}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar cronograma diário:", error);
        throw error;
    }
};

export const getReservationsByPeriod = async (salaId, startDate, endDate) => {
    try {
        const response = await api.get(`/api/calendar/reservations/${salaId}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar reservas por período:", error);
        throw error;
    }
};

export const getReservationFrequency = async (salaId, startDate, endDate) => {
    try {
        const response = await api.get(`/api/calendar/frequency/${salaId}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar frequência de reservas:", error);
        throw error;
    }
};

export const getAverageOccupancy = async (salaId, startDate, endDate) => {
    try {
        const response = await api.get(`/api/calendar/occupancy/${salaId}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar ocupação média:", error);
        throw error;
    }
}
