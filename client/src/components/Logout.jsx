import React from 'react';
import { Redirect } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    return <Redirect to='/' />
}

export default Logout;