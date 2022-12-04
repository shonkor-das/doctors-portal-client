import { createContext } from "react";
import React from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/Firebase.config';


const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({childern}) => {

    const authInfo = {

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;