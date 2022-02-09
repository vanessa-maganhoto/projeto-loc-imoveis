import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Listing from './paginas/indexListing';
import Form from './paginas/indexForm';
import Navbar from "./componentes/Navbar/navbar";
import FormCadastro from './componentes/formCadastro';
import FormDetalhes from './componentes/formDetalhes';
import { Imovel } from '../src/types/imovel' 



export default function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
       
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":imovelId" element={<Form />} />
        </Route>
        <Route path="/cadastro" element={<FormCadastro/>}>
        </Route>
        <Route path="/detalhes" >
          <Route path=":imovelId" element={<FormDetalhes />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

 
