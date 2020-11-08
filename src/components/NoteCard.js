import React from 'react';
import { useHistory} from 'react-router-dom';


export const NoteCard = (props) => {
  
    const {image, title, subtitle,date }= props;
      const history = useHistory();
      const handleClick = () =>{
        history.push(`/note/${title}`)
    }
    return (
        
        <div className="card m-3 bg-white text-light  align-content-center rounded animate__animated animate__fadeIn" id="card1" onClick={handleClick}>
            <img className="card-img-top img-fluid" src={image} alt="Card" />
            <div className="card-body" >
            <h2 className="card-title text-dark"  >{title}</h2>
            <h5 className="card-subtitle text-secondary" > {subtitle}</h5>
            <p className="card-text text-danger">
                {date}
            </p>
            
            </div>
        </div>

    )     
}


