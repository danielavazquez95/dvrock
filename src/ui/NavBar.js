import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { NavMobile } from './NavMobile'

export const Navbar = () => {

    const {uid} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(startLogout())

    };

   
    return (
        <>
         <NavMobile/>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-none d-md-flex">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
           <img src={'https://i.ibb.co/0D4CcH7/logo.png'} alt="logo" className="logo"/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link d-none d-md-inline" 
                        exact
                        to="/"
                    >
                        Noticias
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link d-none d-md-inline" 
                        exact
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

         
               
                   { 
                     uid ?      
                                
                                (
                                
                                    <ul className="navbar-nav ml-auto">
                                        <a
                                            className="nav-item nav-link d-none d-md-inline" 
                                            href="https://www.facebook.com/danielavazquez87/"
                                            target="_BLANK"
                                            rel="noreferrer" 
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                        <a
                                            className="nav-item nav-link d-none d-md-inline" 
                                            href="https://twitter.com/DanielaaVazquez"
                                            target="_BLANK"
                                            rel="noreferrer" 
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </a>

                                        <a
                                            className="nav-item nav-link d-none d-md-inline" 
                                            href="https://www.instagram.com/danielaavazquez"
                                            target="_BLANK"
                                            rel="noreferrer" 
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                
                                        <NavLink
                                            activeClassName="active"
                                            className="nav-item nav-link text-danger d-none d-md-inline" 
                                            to="#"
                                            onClick={handleLogout}
                                        >
                                        Cerrar sesión
                                        </NavLink>
                                    </ul>
                            
                                )
                        : 
                            
                             (<ul className="navbar-nav ml-auto">
                                    <a
                                            className="nav-item nav-link d-none d-md-inline" 
                                            href="https://www.facebook.com/danielavazquez87/"
                                            target="_BLANK"
                                            rel="noreferrer" 
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                        <a
                                            className="nav-item nav-link d-none d-md-inline" 
                                            href="https://twitter.com/DanielaaVazquez"
                                            target="_BLANK"
                                            rel="noreferrer" 
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </a>

                                        <a
                                            className="nav-item nav-link d-none d-md-inline" 
                                            href="https://www.instagram.com/danielaavazquez"
                                            target="_BLANK"
                                            rel="noreferrer" 
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link d-none d-md-inline" 
                                        exact
                                        to="/auth/login"
                                     >
                                    Iniciar sesión
                                    </NavLink>
                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link d-none d-md-inline" 
                                        exact
                                        to="/auth/register"
                                     >
                                    Registrarse
                                    </NavLink> 
                                  
                                </ul>
                                )
                                
                    }
                
        
        </nav>
        </>
    )
}