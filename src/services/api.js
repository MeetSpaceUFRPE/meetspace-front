import axios from "axios";

// Criação da instância do Axios com configurações padrões
const api = axios.create({
  baseURL: "https://seu-endpoint-da-api.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
