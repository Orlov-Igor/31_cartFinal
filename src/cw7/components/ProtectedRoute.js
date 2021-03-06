import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentAuthState } from '../redux/selectors/auth';


function ProtectedRoute({ component: Component, ...rest }) { 
const isAuthenticated = useSelector(getCurrentAuthState);

return (
	<Route {...rest} render={(props) => (
	   	isAuthenticated.user 
		? <Component {...props} /> 
		: <Redirect to={{ pathname: '/signin', state: { from: props.location }}} />   
	)} />
	)
}

export default ProtectedRoute;