import React from 'react';
import { useHistory} from 'react-router-dom';

export const NoteCard1 = () => {

   
    const history = useHistory();
    const handleClick = () =>{
      history.push(`/note/${'Charly Garcia cumple 69 años'}`)
  }
    return (
        <div className="card m-3 bg-white text-light  align-content-center rounded animate__animated animate__fadeIn" id="card2" onClick={handleClick}>
        <img className="card-img-top img-fluid" src={'https://media.infonews.com/p/48bd456e5254227fcae318f8f2bb12b3/adjuntos/280/imagenes/000/357/0000357225/charly-garcia.jpg'} alt="Card" />
        <div className="card-body" >
        <h2 className="card-title text-dark"  >Charly Garcia cumple 69 años</h2>
        <h5 className="card-subtitle text-secondary" > Historias de su oído absoluto, una habilidad que muy pocos tienen </h5>
        <p className="card-text text-danger">23 de octubre de 2020 </p>
        
        </div>
    </div>
    )
}
