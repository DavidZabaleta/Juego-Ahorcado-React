import React, {useState} from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row} from 'react-bootstrap';
import Tarjeta from './Tarjeta';


function Play(){
    
    
    const[fraseIngresada,setFraseIngresada] = useState("");
    const[mostrarTarjeta,setMostrarTarjeta] = useState(false);

    function mostrar(){
        setMostrarTarjeta(true);
    }

    const handleOnChange=event=>{
        setFraseIngresada(event.target.value);
    }
    console.log(fraseIngresada);

    const transformarFrase = fraseIngresada.split(" ");
/**
    const fraseTransformada = transformarFrase.map(element => {
        let longitudPalabra = element.length;
        //<li key={element}>{element}</li>
    }
 */
    return(
        <div>
            <Header/>
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col col-3">
                            <input type= "text" placeholder="Ingrese la frase" value={fraseIngresada} onChange={handleOnChange}></input>
                        </div>
                        <div className="col col-2">
                            <Button variant="primary" onClick={mostrar}>Empezar</Button>
                        </div>
                    </div>
                </section>

                <div>
                    <h2>Lista</h2>
                    <Tarjeta transformarFrase = {transformarFrase} mostrarTarjeta = {mostrarTarjeta}/>
                </div>
                
            </div>
        </div>
    );
}
export default Play;