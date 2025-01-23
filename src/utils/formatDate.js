/**
 * Formata uma data no formato dia/mês/ano
 * @param {Date | moment.Moment | null} date - A data a ser formatada
 * @returns {string} Data formatada como "dd/mm/yyyy"
 */
export const formatDate = (date) => {
    if (!date) return ""; // Retorna vazio se a data for inválida ou nula
  
    const parsedDate = date.toDate ? date.toDate() : new Date(date); // Suporte ao Moment.js ou Date nativo
  
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Meses começam do zero
    const year = parsedDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  