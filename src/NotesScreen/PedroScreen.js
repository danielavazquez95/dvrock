import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const PedroScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  { id } = card;
    
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">Pedro Aznar</h2>
                    <h5 className="text-secondary" >Lanza su vivo folclórico por streaming</h5>
                    <p className="card-text text-danger"> 20 de octubre de 2020</p>
                    <hr/> 
                    <img className="img-fluid" src={'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/64887006_10155866506271706_1390260856217927680_n_1573048645.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Agencia Télam </p>
                    <hr/>
                    <p className="text-dark my-3 text-justify">
                    Pedro Aznar ofrecerá un nuevo concierto en vivo vía streaming el próximo 5 de noviembre, a las 21, en el que abordará un repertorio basado en clásicos del folclore latinoamericano.
                    <br/>
                    <br/>
                    Se trata del espectáculo "Flor y Raíz", que recorrerá composiciones tradicionales de nuestro país, Chile, Uruguay, Perú, México, Cuba y Brasil.
                    <br/>
                    <br/>
                    En esta ocasión, el músico estará acompañado por Alejandro Oliva, en percusión; y Federico Arreysegor, en teclados.
                    <br/>
                    <br/>
                    El espectáculo que podrá verse por la plataforma Tickethoy será el quinto que ofrecerá en formato digital el ex Serú Girán, quien encaró cada uno de ellos con distintos repertorios temáticos.
                    <br/>
                    <br/>
                    Cabe destacar que el artista, que se alzó con un Premio Gardel 2020 por su disco "Abrazo de Hermanos", junto al chileno Manuel García, también realizó varias transmisiones desde sus redes sociales en este período de aislamiento social preventivo por la pandemia de coronavirus, en los que combinó música y la lectura de textos y poesías.
                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
