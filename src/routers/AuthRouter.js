import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import { RegisterScreen } from '../components/RegisterScreen'

export const AuthRouter = ({isAuthenticated}) => {
    const {uid} = useSelector (state => state.auth)
    return (
       
            <>
                {   
                  uid ? (<Redirect to="/"/>)
                    :
                   ( <Route
                    exact
                    path="/auth/login"
                    component={LoginScreen}/>)
                }
                {
                    uid ? (<Redirect to="/"/>)
                    :
                    (<Route
                        exact
                        path="/auth/register"
                        component={RegisterScreen}/>)          
                }
                

            </>
    )
}
