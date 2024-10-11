import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';

import React from 'react'

function VerCategoria() 
{
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [respuesta, setRespuesta] = useState('');
    const [respuestaError, setRespuestaError] = useState(false);
    
    useEffect (() => {
            traerCategorias()
        }, []);

    const traerCategorias = async () => {
        setCargando(true);
        try {
            const response = await axios.get('http://localhost:8000/categorias');
            setCategorias(response.data);
            setCargando(false);
        } catch (error) {
            setRespuestaError(true);
            setRespuesta('Hubo un error al cargar las categorías');
            setCargando(false);
        }
    }

    const handleRefresh = () => 
    {
        setCategorias([]);
        setRespuesta('');
        setRespuestaError(false);
        traerCategorias();
    }
    
      return (
        <div className='container mt-5'>
            {cargando ? (
            <div className="spinner-container-list">
                <Spinner animation="border" size="lg" />
            </div>
            ) : respuestaError ? (
                <div className="alert alert-danger">{respuesta}</div>
            ) : (
                <>
                    <h2>Gastos</h2>
                 <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Categoria.map((categoria, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{categoria.nombre}</td>
                                    <td>{categoria.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {!categoria.length && <p>No se encontraron categorias.</p>}
                </>
            )}
            {respuesta && !respuestaError && (
                <p className="mt-3">Respuesta del servidor: {respuesta}</p>
            )}
            <Button variant="outline-secondary" className='refrescar'  onClick={handleRefresh} >
                Refrescar
            </Button>

        </div>
      )
    
}

export default VerCategoria