import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const MickScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  {id } = card;

    
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">Mick Jagger</h2>
                    <h5 className="text-secondary" >Nuevo sencillo</h5>
                    <p className="card-text text-danger"> 23 de octubre de 2020</p>
                    <hr/> 
                    <img className="img-fluid" src={'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/30/15539599875236.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Marco Rodriguez </p>
                    <hr/>
                    <p className="text-dark my-3 text-justify">
                    Mick Jagger de los Rolling Stones ha apuntado al presidente de los Estados Unidos, Donald Trump, en un nuevo adelanto de una próxima canción.
                    <br/>
                    <br/>
                    El ícono de la música critica el uso constante de Twitter por parte de Trump en el nuevo avance que se tituló “Orgullo antes de una caída”.
                    <br/>
                    <br/>
                    El fuerte golpe a Trump se produce después de que The Stones advirtiera a Donald Trump a principios de este año que dejara de usar su música en sus mítines y eventos o enfrenta una demanda. 
                    <br/>
                    <br/>
                    La banda ya ha servido al presidente de los Estados Unidos con múltiples directivas de cese y desistimiento después de que comenzó a tocar sus canciones, incluida “No siempre puede conseguir lo que quieres” en eventos de su campaña presidencial de 2016.
                    </p>
                     

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
