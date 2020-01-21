import React, { Fragment, useState, useEffect } from "react";
import Form from  './components/Form'
import Cita from './components/Cita'

function App() {
  // citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales) {
    citasIniciales = []
  }
  // arreglo de citas
  const [citas, setCitas] = useState(citasIniciales)
  
  // use Effect para realizar ciertas operaciones cuando el state cambia
  /*useEffect se ejecuta cuando el componente esta listo o ah ocurrido alguna actualizacion 
  El array que se pasa como segundo parametro se le conoce como dependencias y conrrespecto
  a ese valor cambiará*/
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])

  //funcion que tome las citas actuales y agregue la nueva
  const almacenarCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }
  // funcion que elimina una cita por su id
  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    setCitas(newCitas)
  }

  // Mensaje condicional
  const title = citas.length === 0 ? 'Registra tus citas' : 'Administra tus citas'
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              almacenarCita={almacenarCita}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
