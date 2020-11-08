import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startNewComment} from '../actions/comments';
import { Commets } from './Commets';

export const BoxComments = ({id}) => {

   
   
    const {name, uid} = useSelector(state => state.auth);
    
    const dispatch = useDispatch();
   
   const [state, setState] = useState({});

   const handleInputChange = (e) => {

        setState(e.target.value);
        
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        name && (dispatch(startNewComment(state, name, id)));
        document.getElementById('form-comment').reset();
    }
 

    return (

    <>
    {
        (uid) ? 

    ( <div className="container pt-3">
                <div className="row comments justify-content-center">
                    <div className="col-11">
                        <form className="form_comments d-flex justify-content-end flex-wrap" id="form-comment" onSubmit={handleSubmit} >
                            <input  type="text" name="body" onChange={handleInputChange} autoComplete="off" placeholder="Escriba su comentario..."/> 
                            <button type="submit" className="btn btn-success">Comentar </button>
                        </form>
                        <Commets id={id}/>
                    </div>
                </div>
            </div> )
        :

        (<div className="container pt-3">
            <div className="row comments justify-content-center">
                <div className="col-11">
                    <form className="form_comments d-flex justify-content-end flex-wrap" id="form-comment" >
                        <input  type="text" name="body"  autoComplete="off" placeholder="Escriba su comentario..."/> 
                        <button type="submit" className="btn btn-success" disabled={true} >Comentar </button>
                    </form>
                    <div className="alert alert-danger" >
                        <Link to="/auth/login" > Iniciar sesión para poder acceder a los comentarios. </Link> 
                    </div>
                </div>
            </div>
        </div> )

    }

    </>
            
    )
}
