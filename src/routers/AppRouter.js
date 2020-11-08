import React, { useEffect, useState } from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import {firebase} from '../firebase/firebase-config';
import { CardSreen } from '../components/CardSreen';
import { HomeScreen } from '../components/HomeScreen';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/NavBar';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingComments } from '../actions/comments';
import { ContactScreen } from '../components/ContactScreen';
  

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    

    useEffect(() => {
    
        firebase.auth().onAuthStateChanged( async (user) => {
            
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)

                dispatch(startLoadingComments());

            } else {
                setIsLoggedIn(false)
                
            }
            
        })
        
    }, [dispatch, setIsLoggedIn])

    return (
        <div id="fondo">
           <HashRouter  basename='/'>
            <div>
                <Navbar />
        
                <Switch>
                   <Route exact path="/note/:title" component={ CardSreen}/>
                   <Route path="/auth" isAuthenticated={isLoggedIn} component={AuthRouter} />
                   <Route exact path="/contact" component={ContactScreen}/>
                    <Route exact path="/" component={HomeScreen} />
                   <Redirect to="/"/>
                </Switch>

                <Footer/>

            </div>
        
             </HashRouter>
        </div>
    )
}
