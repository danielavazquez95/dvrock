import React from 'react';
import { useParams } from 'react-router-dom';
import { notas } from '../notas';
import { BoxComments } from '../ui/BoxComments';


export const LadyGagaScreen = () => {

    const {title} = useParams();
    
    const card = notas.find(nota => nota.title === title);
    const  {id } = card;
   
    return (
        <div className="container my-4 py-4 animate__animated animate__fadeIn" >
            <div className="row justify-content-center">
                <div className="col-11 bg-white p-4 rounded">
                    <h2 className="text-dark align-self-center">Lady Gaga</h2>
                    <h5 className="text-secondary" >Al frente de las nominaciones para los premios MTV de Europa </h5>
                    <p className="card-text text-danger"> 10 de octubre de 2020 </p>
                    <hr/> 
                    <img className="img-fluid" src={'https://estaticos.elperiodico.com/resources/jpg/0/6/lmmarco49027779-gente-lady-gaga-instagram200216133951-1581856936460.jpg'} alt="Card" />
                    <p className="card-text text-secondary pt-3"> Por Agencia EFE </p>
                    <hr/>
                    <p className="text-dark my-3 text-justify">
                    Con presencia en siete categorías, Lady Gaga lidera las nominaciones a los premios MTV Europa Music Awards 2020, conocidos también como EMA, seguida por Justin Bieber y BTS, con cinco cada uno. Esto es lo que informa la página oficial de los premios, que en esta edición contarán con tres nuevas categorías: mejor artista latino, mejor actuación virtual y mejor video para el bien.
                    <br/>
                    <br/>
                    Sin ningún representante argentino, en la categoría de mejor artista latino, los nominados son Anuel AA, Bad Bunny, J Balvin, Karol G, Maluma y Ozuna. Además, Balvin aparece en el rubro de "mejor actuación virtual" por Behind the Colores Live Experience, y Maluma, por Papi Juancho Live.
                    <br/>
                    <br/>
                    El acontecimiento se emitirá a través de MTV el próximo 8 de noviembre y quienes quieran hacerlo podrán votar por sus artistas favoritos hasta el 2 de noviembre
                    <br/>
                    <br/>
                    Entre las candidaturas obtenidas por Gaga se encuentran las de mejor artista, mejor artista pop y mejor clip por su colaboración con Ariana Grande en Rain on me, un tema que también obtuvo los reconocimientos a mejor canción y mejor colaboración.
                    </p>    

                    <BoxComments id={id}/>
                            
                </div>
            </div>
        </div>
    )
}
