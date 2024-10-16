import React, { useContext } from 'react';
import { authContext } from '../contextAPI/ContextAPI';
import { Navigate } from 'react-router-dom';
import Profile_details from './Profile_details';


const Profile = () => {
    const {user} = useContext(authContext) 

    if (user !== null){
        return <Profile_details user={user}></Profile_details>

    }

    return <Navigate to='/'></Navigate>; 
};

export default Profile;