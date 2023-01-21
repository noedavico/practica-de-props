import React from "react";
import persona1 from "../../img/persona1.jpg"


const Testimonios = (props) => {
	return (
		<div className="box-testimonio">
		<img className="img-testimonio" src={props.imagen} alt="Foto de Liz"/>	
		<div className="box-texto-testimonio"> 
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p> 
        <p className="cargo-testimonio"> {props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio"> {props.testimonio}</p>
        </div>
        </div>
	);
};

export default Testimonios;
