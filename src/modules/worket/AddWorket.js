import { post } from '../../utils/api';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function AgregarEmpleado() {

    let navegation = useNavigate();

    const [worket, setEmpleado] = useState({
        name: '',
        department: '',
        salary: 0
    });

    const{name, department, salary} = worket;

    const onInputChange = (e) => {
        setEmpleado({
            ...worket,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const urlBase = '/workers';
        await post(urlBase, worket);
        navegation('/');

    }
    return (
        <div className='container'>
            <div className='container text-center' style={{ marginTop: '100px' }}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>
            <div className='container text-center'>
                <h3>Agregar Empleado</h3>
                <form onSubmit={(e)=> onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" required={true} value={name} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Departamento</label>
                        <input type="text" className="form-control" id="department" name="department" required={true} value={department} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Sueldo</label>
                        <input type="number" className="form-control" id="salary" name="salary" required={true} value={salary} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className="text-center">
                        
                        <button type="submit" className="btn btn-success btn-sm me-3">Guardar</button>
                        <a href="/" className="btn btn-danger btn-sm">Cancelar</a>
                    </div>
              
                </form>
            </div>
        </div>
    )
}
