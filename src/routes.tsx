import React from 'react';
import {Routes, Route} from 'react-router';
import Home from './pages/Home'
import Tasks from './pages/Tasks'



const Rotas: React.FC = () => {
    return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/tarefas" element={<Tasks/>}/>
    </Routes>
        )
}

export default Rotas;