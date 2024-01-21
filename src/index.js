// Importando as bibliotecas necessárias do React
import React from 'react';
import ReactDOM from 'react-dom';

// Importando um arquivo css para colocar estilos para a pagina toda
import './global.css';

// Importando o componente 'Home' de um arquivo local
import Home from './pages/Home';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Details from './pages/Detailis';


// Renderizando o componente 'Home' dentro do elemento com o ID 'root' no HTML
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/details/:id" element = {<Details/>}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// Este arquivo é o ponto de entrada da aplicação, onde o React é inicializado