import React from 'react';
import {Routes, Route} from 'react-router';
import Home from './pages/Home'
import Clients from './pages/Clients'



const Rotas: React.FC = () => {
    return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/clientes" element={<Clients/>}/>
    </Routes>
        )
}

export default Rotas;