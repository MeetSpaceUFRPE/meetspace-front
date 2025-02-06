import axios from "axios";

// Criação da instância do Axios com configurações padrões
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
