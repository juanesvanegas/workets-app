import { get ,post, put} from '../../utils/api';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export default function EditarEmpleado() {

    const urlBase = '/empleados';

    let navegation = useNavigate();

    const {id} = useParams();

    const [empleado, setEmpleado] = useState({
        nombre: '',
        departamento: '',
        sueldo: 0
    });

    const{nombre, departamento, sueldo} = empleado;

    useEffect(() => {
        if(id){
            loadworker();
        }
    }, [id]);

    const loadworker = async () => {
        const response = await get(`${urlBase}/${id}`);
        if(response.status === 200){
            setEmpleado(response.data);
        }else{
            alert(response?.data?.message);
        }
        
    }
    const onInputChange = (e) => {
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await put(`${urlBase}/${id}`, empleado);
        if(response.status === 200){
            navegation('/');
        }else{
            alert(response?.data?.message);
        }
        
    }
    return (
        <div className='container'>
            <div className='container text-center' style={{ marginTop: '100px' }}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>
            <div className='container text-center'>
                <h3>Editar Empleado</h3>
                <form onSubmit={(e)=> onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required={true} value={nombre} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="departamento" className="form-label">Departamento</label>
                        <input type="text" className="form-control" id="departamento" name="departamento" required={true} value={departamento} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sueldo" className="form-label">Sueldo</label>
                        <input type="number" className="form-control" id="sueldo" name="sueldo" required={true} value={sueldo} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className="text-center">
                        
                        <button type="submit" className="btn btn-success btn-sm me-3">Editar</button>
                        <a href="/" className="btn btn-danger btn-sm">Cancelar</a>
                    </div>
              
                </form>
            </div>
        </div>
    )
}
