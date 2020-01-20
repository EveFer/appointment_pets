import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'
const Form = ({almacenarCita}) => {
    // Crear state de cita
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [error, setError] = useState(false)

    // funcion que se ejecuta cada vez que un usuario escribe en un input
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
 
    // extraer los valores del state cita
    const {mascota, propietario, fecha, hora, sintomas} = cita

    // Cuando el usuario presiona agregar cita
    const handleSubmit = e => {
       e.preventDefault() // realiza que no se envien los datos por el metood get

       // validar form, / la funcion trim elimina los espacios del inicio y fin del texto
       if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
        setError(true)  
        return // este return se coloca que se termine de ejecutar todo lo demas cuando el form no sea valido
       }
       // desactivar el alert
       setError(false)
       // Asignar un Id
       cita.id = uuid()
       // almacena la cita en un array del componente App.
       almacenarCita(cita)
       // Reiniciar el form
       setCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
       })

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {/* Para mostrar el alert - de que todos los campos son obligatorios */}
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre de Mascota:</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange} 
                    value={mascota} 
                />  

                <label htmlFor="">Nombre de Dueño:</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={propietario}
                />  

                <label htmlFor="">Fecha:</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />  

                <label htmlFor="">Hora:</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />  

                <label htmlFor="">Sintomas:</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea> 

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
};

export default Form;