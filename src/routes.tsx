import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Clients } from "./pages/Clients";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clients />} />
    </Routes>
  );
};

export default Rotas;
