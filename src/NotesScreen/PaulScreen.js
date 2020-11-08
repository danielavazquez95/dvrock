import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const PaulScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  { id } = card;
    
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">Paul McCartney</h2>
                    <h5 className="text-secondary" >Anuncia nuevo album</h5>
                    <p className="card-text text-danger"> 22 de octubre de 2020 </p>
                    <hr/> 
                    <img className="img-fluid" src={'https://media.metrolatam.com/2018/12/03/capturadepantalla20181203alas104906am-21ba5cdbebe3ecd6a3c5ca102e6b75da-600x400.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Marco Rodriguez </p>
                    <hr/>
                    <p className="text-dark my-3 text-justify">
                    La leyenda británica de la música, Paul McCartney, reveló este miércoles que lanzará este año un nuevo álbum en solitario tras haber “resucitado” y vuelto a trabajar en piezas musicales que habían quedado inconclusas.
                    <br/>
                    <br/>
                    El nuevo disco del ex Beatle, “McCartney III”, saldrá a la venta el próximo 11 de diciembre y coronarán varios meses de trabajo en el estudio de su casa en Sussex, en el sur de Inglaterra.
                    <br/>
                    <br/>
                    Las canciones han sido escritas e interpretadas por McCartney. El músico dijo que no planeaba lanzar un álbum en 2020, pero el haber tenido que permanecer en su residencia durante largos períodos de tiempo como consecuencia de la pandemia cambió sus planes.
                    <br/>
                    <br/>
                    “Tenía algunas cosas en las que trabajé a lo largo de los años, pero el tiempo pasó y las dejé a medias, de manera que he retomado aquello que tenía”, dijo McCartney, en comentarios publicados por la agencia británica de noticias Press Association.
                    <br/>
                    <br/>
                    “Se trataba de hacer música para uno mismo, en lugar de hacer música como un trabajo (...) Nunca pensé que todo esto pudiera acabar en un álbum”, agregó el artista de 78 años.
                    <br/>
                    <br/>
                    A través de su cuenta de Twiiter, McCartney publicó un adelanto de su último trabajo de estudio.
                    <br/>
                    <br/>
                    Su lanzamiento coincide con el 50 aniversario de su primer proyecto en solitario, luego de que los Beatles se separaran en 1970. A ese álbum le siguió una década más tarde otro álbum llamado “McCartney II”.

                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
