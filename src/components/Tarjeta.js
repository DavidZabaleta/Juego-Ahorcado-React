import React, {useState} from 'react';
import { Row, Button } from 'react-bootstrap';
import LetraColumna from './LetraColuma';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tarjeta(props){

    const {transformarFrase, mostrarTarjeta} = props;

    console.log(props);

    return(
        <div className="fila">
            <ul>
                {
                    (mostrarTarjeta == true)?
                        transformarFrase.map(frase =>(
                        <Row key = {frase}>
                            <LetraColumna frase = {frase}/>
                        </Row>
                        )):
                    <h1></h1>            
                }
            </ul>  
            
        </div>
        
    );
}

export default Tarjeta;

/**{
                (mostrarTarjeta == true)?
                    <div className="col col-3">
                        <input type= "text" placeholder="Ingrese la letra" maxLength="1"></input>
                    </div>
                    <div className="col col-3">
                        <Button variant="primary">Probar</Button>
                    </div>
                    <div className="col col-3">
                        <Button variant="primary">Adivinar</Button>
                    </div>
                :
                    <h1></h1>
            } */