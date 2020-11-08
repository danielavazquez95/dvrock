
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';


export const NavMobile = () => {

  const [sidebar, setSidebar] = useState(false);
  const {uid} = useSelector(state => state.auth);

  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  const handleLogout = () =>{
      dispatch(startLogout())

  };

  return (
    <>
        <div className='navbar nav-mobile d-sm-block d-md-none bg-dark' onClick={showSidebar}>
            <Link to='#' className='menu-bars'>
              <i className="fas fa-bars d-md-none" onClick={showSidebar}/>
            </Link>
            <Link className="menu-bars" to="/">
            <img src={'https://i.ibb.co/0D4CcH7/logo.png'} alt="logo" className="logo"/>
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active bg-dark d-sm-block d-md-none' : 'nav-menu  bg-dark d-sm-block d-md-none'} onClick={showSidebar}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle bg-dark d-block'>
                    <Link
                        
                        className="menu-bars nav-text" 
                        exact
                        to="/"
                    >
                        Noticias
                    </Link>

                    <Link 
                       
                        className="menu-bars nav-text" 
                        exact
                        to="/contact"
                    >
                        Contacto
                    </Link>
              
              {
                  uid ?  
                  
                  (<>
                  <Link
                  className="menu-bars nav-text text-danger" 
                  to="#"
                  onClick={handleLogout}
                   >
                  Cerrar sesión
                  </Link>
                  </>
                  )

                  :

                  (<>
                    <Link 
                      className="menu-bars nav-text" 
                      exact
                      to="/auth/login"
                    >
                      Iniciar sesión
                    </Link>
                    <Link 
          
                        className="menu-bars nav-text" 
                        exact
                        to="/auth/register"
                    >
                    Registrarse
                    </Link> 
                    </>
                  
                  )
              }
            </li>
           
          </ul>
        </nav>
    </>
  );
}