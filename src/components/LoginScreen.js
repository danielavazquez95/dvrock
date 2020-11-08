import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLoading,finishLoading } from '../actions/ui';
import {firebase, googleAuthProvider } from '../firebase/firebase-config';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import {login} from '../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);
    const history = useHistory();


    const [formValues, handleInputChange] = useForm({
        email:'',
        password:''
    });

    const {email, password} = formValues;

    const startLoginEmailPassword = (email, password) =>{
        return (dispatch) => {
    
            dispatch(startLoading());
    
            firebase.auth().signInWithEmailAndPassword(email, password) 
            .then(({user}) => {
    
                dispatch(
                    login(user.uid, user.displayName )
                );
               
                dispatch(finishLoading());
                history.goBack();
                
            })
            .catch(e => {
                console.log(e);   
                dispatch(finishLoading());
                Swal.fire('Error', 'No se encontró el usuario', 'error');
              
               
            });
            
        }
    };


const startGoogleLogin = () => {
    return (dispatch) =>{

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName )
            )
            history.goBack();
            
        });
    }
}

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    };

    const handleGoogleLogin = () => {
       dispatch(startGoogleLogin());
        
    }
   
    return (

        <div className="container login ">
            <div className="row login-row justify-content-center">
                <div className="col-12 col-sm-10 col-md-6 col-xl-6 align-self-center ">
                    <form className="form-container" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                aria-describedby="emailHelp"
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
                                value={password}
                                onChange={handleInputChange}
                                />
                        </div>
                    
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block"
                            disabled={loading}
                            >
                                Iniciar sesión
                        </button>
                        <hr/>
                        <div className="auth__social-networks">
                            <div 
                                className="google-btn bg-primary"
                                onClick={handleGoogleLogin}
                            >
                                <div className="google-icon-wrapper bg-white">
                                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Continuar con Google</b>
                                </p>
                                </div>
                        </div>
                    <Link 
                        to="/auth/register">
                        Crear nueva cuenta
                    </Link>
                    </form>

                    
                    
                                        
                </div>
            </div>
        
        </div>
     
    )
}
