import { useState } from "react";
import formularioCategoria from './FormularioCategoria'
import Nav from 'react-bootstrap/Nav';

import React from 'react'
import FormularioCategoria from "./FormularioCategoria";
import VerCategoria from "./VerCategoria";

function CategoriaMain() {
    const [infoMain, setInfoMain] = useState('')
    const cambiarMain = (valor) => {
        setInfoMain(valor)
    }
  return (
    <div>
        <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={()=>cambiarMain('registro')}>Registrar Categoria</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>cambiarMain('ver')}>Ver Categoria</Nav.Link>
      </Nav.Item>
    </Nav>
    {infoMain === 'registro' &&  <FormularioCategoria/>}
    {infoMain === 'ver' &&  <VerCategoria/>}

    </div>
    )
}

export default CategoriaMain