
import { get, remove } from '../../utils/api';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListWorkers() {

    const urlBase = '/Workers';

    const[workets, setWorkets] = useState([]);

    useEffect(() => {
        loadWorker();
    }, []);

    const loadWorker = async () => {
        const response = await get(urlBase);
        setWorkets(response.data);
    }

    const deleteWorker = async (id) => {
        const response = await remove(`${urlBase}/${id}`);
        if(response.status === 200){
            loadWorker();
        }else{
            alert(response?.data?.message);
        }
        
    }
    return (
        <div className='container'>
            <div className='container text-center' style={{ marginTop: '100px' }}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { workets.map((worket, key)=>(
                        <tr key={key}>
                        <th scope="row">{worket.idEmpleado}</th>
                        <td>{worket.nombre}</td>
                        <td>{worket.departamento}</td>
                        <td><NumericFormat value={worket.sueldo} displayType={'text'} thousandSeparator="," decimalScale={2} prefix={'$'} fixedDecimalScale={true} /></td>
                        <td className='text-center'>
                            <Link to={`/empleados/editar/${worket.idEmpleado}`}>
                                <button className="btn btn-warning btn-sm me-3">Editar</button>
                            </Link>
                            
                                <button className="btn btn-danger btn-sm" onClick={()=>deleteWorker(worket.idEmpleado)}>Eliminar</button>
                           
                        </td>
                    </tr>)) 

}
                </tbody>
            </table>
        </div>
    )
}
