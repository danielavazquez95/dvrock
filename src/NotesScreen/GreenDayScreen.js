import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const GreenDayScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  {id } = card;

    
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">Green Day</h2>
                    <h5 className="text-secondary"> Celebra los 25 años de Insomniac </h5>
                    <p className="card-text text-danger"> 18 de octubre de 2020 </p>
                    <hr/> 
                    <img className="img-fluid" src={'https://www.rockzonemag.com/wp-content/uploads/2020/02/Green-Day-foto-3-2020-rockzone-1.gif'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Fabián Nuñez Rojas </p>
                    <hr/>
                    <p className="text-dark my-3 text-justify">
                    Green Day ha liberado material inédito de su gira en 1996 para celebrar el aniversario de «Insomniac». El pasado 10 de octubre, el cuarto álbum de la banda cumplió 25 años desde su lanzamiento.
                    <br/>
                    <br/>
                    El grupo de Billie Joe Armstrong ha buscado en sus archivos noventeros para celebrar este nuevo aniversario. Se trata de un registro de 20 minutos que retratan su gira en promoción de «Insomniac», donde Green Day se presentó en distintos países europeos. El concierto lanzado es de una presentación en Praga en 1996.
                    <br/>
                    <br/>
                    «Insomniac» fue un sucesor menos exitoso comercialmente que el antecesor «Dookie», pero no menos importante en su discografía. El disco tuvo una positiva recepción por parte de la crítica y los fanáticos, en especial por las composiciones de Armstrong. De aquí se desprenden canciones como «Brain Stew/Jaded» y «Stuck With Me».
                    <br/>
                    <br/>
                    «¡¡Es el aniversario 25 de Insomniac!! Así que queríamos hacer algo especial, aquí está el mayor vistazo a nuestra era de tours de Insomniac de 1995-96.», escribió la banda en la descripción del video. Cabe recordar que Green Day canceló la gira europea para darse tiempo de regresar a sus hogares, por lo que estos registros muestran uno de los últimos conciertos de esta.
                    <br/>
                    <br/>
                    Recientemente, la banda anunció una edición de aniversario del disco, que incluye un vinilo doble, arte exclusivo y la presentación en vivo publicada. Sin embargo, por los efectos del coronavirus en la producción de estos, se espera que los vinilos sean lanzados hasta 2021.

                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
