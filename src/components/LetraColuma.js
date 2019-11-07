import React, {useState} from 'react';
import { Col, Button } from 'react-bootstrap';

function LetraColumna(props){

    const {frase} = props;

    var letras = frase.split('');
    console.log(letras);
    return(
        <div className="columna">
            {
                letras.map(letra =>(                
                <div key={letra} className="letra">
                    <Button variant="dark" value={letra}>
                    </Button>            
                </div>
                ))
            }
        </div>
    );

}

export default LetraColumna;