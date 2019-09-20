import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {
	// State Principal

	// ciudad = state, guardarCiudad = this.setState()
	const [ ciudad, guardarCiudad ] = useState('');
	const [ pais, guardarPais ] = useState('');
	const [ error, guardarError ] = useState(false);

	const datosConsulta = (datos) => {
		// Validar que ambos campos estén
		if (datos.ciudad === '' || datos.pais === '') {
			guardarError(true);
			return;
		}

		// Ciudad y pais existen, agregarlos al state
		guardarCiudad(datos.ciudad);
		guardarPais(datos.pais);
		guardarError(false);
	};

	// Cargar un component Condicionalmente
	let componente;
	if (error) {
		// Hay un error, mostrarlo
		componente = <Error mensaje="Ambos campos son obligatorios" />;
	} else {
		// Mostrar el Clima
		componente = null;
	}
	return (
		<div className="App">
			<Header titulo="Clima React App" />

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Formulario datosConsulta={datosConsulta} />
						</div>
						<div className="col s12 m6">{componente}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
