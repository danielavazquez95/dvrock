import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const DavidScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  { id } = card;
    
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">David Lebón</h2>
                    <h5 className="text-secondary" > Premios Gardel </h5>
                    <p className="card-text text-danger"> 20 de septiembre de 2020 </p>
                    <hr/> 
                    <img className="img-fluid" src={'https://www.telam.com.ar/advf/imagenes/2020/09/5f707a770cdc2_1004x565.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Yumber Vera Rojas </p>
                    <hr/> 
                    <p className="text-dark my-3 text-justify">
                    David Lebón se convirtió en la noche del viernes en el gran ganador de los Premios Gardel 2020, al obtener seis estatuillas, entre ellas la de “Album del año” (también conocida como “Gardel de Oro”), por su disco Lebón & Co. Si bien no se trató de ninguna sorpresa debido a que lideraba las postulaciones, con su incorporación en ocho categorías, posiblemente sea una de las últimas ediciones del galardón concebido por la Cámara Argentina de Productores de Fonogramas y Videogramas (Capif) en la que la tradición de la música contemporánea argentina tenga una oportunidad protagónica. Y es que el principal contrincante del ex Pescado Rabioso, Pappo’s, Blues, Polifemo y Seru Giran era Wos, 45 años más joven, quien ostentaba la misma cantidad de nominaciones con apenas un álbum: Caravana. No sólo eso: el rapero y freestyler se transformó en la punta del iceberg de una generación de artistas decidida a establecer un punto de inflexión en la escena musical local, lo que quedó en evidencia en su posicionamiento en la mayoría de los 41 rubros que tuvo esta versión de la premiación.
                    <br/>
                    <br/>
                    A pesar de que una de las novedades competitivas de los Premios Gardel de este año fue la inclusión de mujeres y hombres por igual en las categorías, otro de sus rasgos fue la realización de una producción adaptada a estos tiempos de COVID-19. Conducida por Ale Sergi y la actriz y cantante Natalie Pérez, esta entrega no tuvo tiempos muertos. A lo largo de dos horas bien expeditivas, y por primera vez, el evento no se pudo llevar adelante en un mismo aforo. Así que la presentación de las ternas, desde diferentes locaciones y en algunos casos con propuestas inteligentes, alternó con agradecimientos mandados vía celular y performances pandémicas que intentaron cumplir con el distanciamiento social. La primera de ellas estuvo a cargo de la agrupación que comanda el conductor, Miranda!, que junto a Lali Espósito reversionó “Tu amor”, éxito de Charly García y Pedro Aznar incluido en el disco Tango 4. A lo que le secundó la entrega de la primera estatuilla de la noche, “Mejor álbum de rock”, que, a manera de preludio, la obtuvo David Lebón gracias a Lebón & Co.
                    <br/>
                    <br/>
                    Antes de que Omar Mollo recibiera la estatuilla “Mejor álbum de tango”, por su disco Embretao, premio que fue precedido por “Mejor álbum artista de folklore”, obtenido por José Luis Aguirre y su trabajo Chuncano, y el segundo Gardel para Lebon, por “Ingeniería de grabación”, Ysy A, Cucuza Castiello y Amelita Baltar consumaron un potpurrí de tangos. Eso dio pie al primer homenaje de la noche. Ricardo Mollo, Elena Roger, Mery Granados, David Lebon, Juanchi Bailerón y Gabriel Pedernera (Eruca Sativa) interpretaron “Presente”, clásico de Vox Dei, junto a su creador, Ricardo Soulé. Luego de que la cantante queer urbana La Queen saliera (literalmente) del clóset para presentar “Mejor álbum grupo tropical”, que fue para Los Palmeras por Sean eternos Los Palmeras, Los Cafres se alzaron con otro de los rubros representativos de esta edición: “Mejor álbum de reggae y ska”. Entonces apareció el tributo a Juan Carlos Saravia, por cortesía de Marcela Morelo, Juan Carlos Baglietto, Los de Portezuelo y el grupo Ahyre, quienes hicieron “Alma de nogal” y “La nochera”.
                    <br/>
                    <br/>
                    
                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
