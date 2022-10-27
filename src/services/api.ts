// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3333",
// });
interface IClients {
  name: string;
  cnpj: string;
  email: string;
  telefone: string;
  created_at?: string;
}

function getClients() {
  const data: IClients[] = [
    {
      name: "Erick vendas de gás",
      cnpj: "00111123000112",
      email: "erick@gmail.com",
      telefone: "35988000000",
    },
    {
      name: "Juan da pipoca",
      cnpj: "00111123000112",
      email: "juan@gmail.com",
      telefone: "35988000000",
    },
  ];
  return data;
}

const api = getClients();

export default api;
