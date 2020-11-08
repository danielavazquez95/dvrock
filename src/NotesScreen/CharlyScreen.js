import React from 'react';

import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const CharlyScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  {id } = card;

    
   
    return (
        <div className="container mb-3 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center" >Charly Garcia cumple 69 años</h2>
                    <h5 className="text-secondary" > Historias de su oído absoluto, una habilidad que muy pocos tienen </h5>
                    <p className="card-text text-danger"> 23 de octubre de 2020 </p>
                    <hr/> 
                    <img className="img-fluid" src={'https://media.infonews.com/p/48bd456e5254227fcae318f8f2bb12b3/adjuntos/280/imagenes/000/357/0000357225/charly-garcia.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Gastón Calvo </p>
                    <hr/> 
                    <p className="text-dark my-3 text-justify">
                    La definición más extendida de oído absoluto es aquella que lo describe como “la habilidad de identificar una nota por su nombre sin la ayuda de una nota referencial" o el "ser capaz de producir exactamente una nota solicitada -cantando- sin ninguna referencia. Esta capacidad está relacionada con la memoria auditiva, o sea, la capacidad de recordar ciertos sonidos”.
                    <br/>
                    <br/>
                    De acuerdo a un estudio publicado en la revista científica Journal of Neuroscience, se adquiere por genética y no por estudio. En el caso de Charly García, quien hoy cumple 69 años, el oído absoluto lo heredó de su bisabuelo.
                    <br/>
                    <br/>
                    El tema se instaló en el verano de 1997 cuando Osvaldo Soriano, pocos días antes de morir, escribió en Página 12 un artículo titulado “Absoluto”. La cuestión llama poderosamente la atención porque el músico tenía 45 años en ese momento. O sea que, recién a esa edad, su oído absoluto llegó a los medios masivos de comunicación.
                    <br/>
                    <br/>
                    Roque Di Pietro, autor de “Esta noche toca Charly”, el libro que retrata al artista como “músico de escenarios”, afirmó al respecto en diálogo con Infobae: “Lo que más me sorprendió fue llegar a la conclusión de que de algún modo fue el propio Charly quien decidió en qué momento instalar el tema en la agenda mediática”.
                    <br/>
                    <br/>
                    “Al igual que todas las personas con oído absoluto, Charly lo tiene de nacimiento. Ahora, desde el comienzo de su carrera profesional hasta principios de los ’90, no hay ninguna referencia a su oído absoluto en las decenas de kilos de prensa gráfica dedicadas a Charly García”, detalló.
                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
