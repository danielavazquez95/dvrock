import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const RogerScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  {id } = card;

    
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">Roger Waters</h2>
                    <h5 className="text-secondary" >La nueva película de la gira 2017-18</h5>
                    <p className="card-text text-danger"> 19 de octubre de 2020 </p>
                    <hr/> 
                    <img className="img-fluid" src={'https://s1.eestatic.com/2019/02/05/cultura/Cultura_373974446_114005473_1024x576.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Billboard AR </p>
                    <hr/>
                    <p className="text-dark my-3 text-justify">
                    Sony Music Entertainment anuncia el lanzamiento de la película concierto ROGER WATERS: US + THEM, grabada durante la gira de Waters 2017-18
                    <br/>
                    <br/>
                    US + THEM muestra la fuerza de la música de Waters como fundador, letrista, compositor y uno de los creadores de Pink Floyd, haciendo hincapié en su mensaje de defensa de los derechos humanos, la libertad y el amor. Basada en su gira mundial de 2017-8 US + THEM, que llevó al músico a ofrecer 156 conciertos para 2,3 millones de personas en todo el mundo, incluye clásicos de The Dark Side of the Moon, The Wall, Animals, Wish You Were Here y también de su álbum más reciente, Is This The Life We Really Want?.
                    <br/>
                    <br/>
                    Dirigido por Sean Evans y Roger Waters, la película nos ofrece la oportunidad de experimentar la sensación de estar presentes en el concierto. Gracias a que Evans ha utilizado la tecnología digital y de audio más avanzada disponible actualmente, este innovador concierto recoge sobrecogedoras experiencias visuales, de audio y sensoriales.
                    <br/>
                    <br/>
                    La película concierto ROGER WATERS: US + THEM está disponible actualmente en formatos 4K, HD y SD Digital a través de Sony Pictures Home Entertainment, y fue rodada en Ámsterdam durante la gira y en localización en Reino Unido. Quienes la vean en formatos digital tendrán acceso a contenido adicional, como las dos canciones en concierto no incluidas en la película original (“Comfortably Numb” y “Smell the Roses”) además de A Fleeting Glimpse, un corto de estilo documental que incluye momentos de detrás de las cámaras de la gira.
                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
