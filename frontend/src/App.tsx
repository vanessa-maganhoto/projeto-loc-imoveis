import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from './paginas/indexListing';
import Form from './paginas/indexForm';
import Navbar from "./componentes/Navbar/navbar";
import FormCadastro from './componentes/formCadastro';
import FormDetalhes from './componentes/formDetalhes';
import FormAtualizaCadastro from './componentes/formAtualizaCadastro'




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
        <Route path="/atualizar" >
          <Route path=":imovelId" element={<FormAtualizaCadastro />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

 
