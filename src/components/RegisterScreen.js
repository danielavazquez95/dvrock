import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm ({
        name:'',
        email:'',
        password:'',
        password2:'',
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0) {
            dispatch(setError('El nombre es requerido'))
            return false;
        } else if (!validator.isEmail(email)){
            dispatch(setError('El email no es valido'))
            return false;
        } else if (password.length < 5 ) {
            dispatch(setError('La contraseña debe tener más de 6 caracteres'))
            return false;
        } else if (password !== password2) {
            dispatch(setError('Las contraseñas deben coincidir'))
            return false;
        }

       
        dispatch(removeError());
        return true;
    }

    return (
       
        <div className="container login mb-4">
            <div className="row login-row justify-content-center">
                <div className="col-12 col-sm-10 col-md-6 col-xl-6 align-self-center">
                    
                    <form className="form-container" onSubmit={handleRegister}>

                       {
                           msgError &&
                            (<div className="auth__alert-error"> 
                                {msgError}
                            </div>)
                       }

                       <div className="form-group">
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                aria-describedby="emailHelp"
                                autoComplete="off" 
                                value={name}
                                onChange={handleInputChange}
                                />
                            
                        </div>
                         <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                aria-describedby="emailHelp"
                                autoComplete="off"  
                                value={email}
                                onChange={handleInputChange}
                                />
                            
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input 
                                type="password" 
                                name="password"
                                className="form-control" 
                                autoComplete="off" 
                                value={password}
                                onChange={handleInputChange}
                                 />
                        </div>
                        <div className="form-group">
                            <label>Confirmar contraseña</label>
                            <input 
                                type="password" 
                                name="password2"
                                className="form-control" 
                                autoComplete="off" 
                                value={password2}
                                onChange={handleInputChange}
                                 />
                        </div>
                        
                    
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block"
                            >
                                Registrarse
                        </button>
                        <hr/>
                        <Link 
                        to="/auth/login">
                        Ya estás registrado?
                        </Link> 
                       
                    </form>

                    
                    
                                        
                </div>
            </div>
        
        </div>
    )
}
