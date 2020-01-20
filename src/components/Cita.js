import React from 'react';

/* en el evento onClick se envia como un arrow functions 
para que espere a que suceda el evento de onClick
*/
const Cita = ({cita, deleteCita}) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={() => deleteCita(cita.id)}
            >Eliminar &times;</button>
        </div>
    );
};

export default Cita;