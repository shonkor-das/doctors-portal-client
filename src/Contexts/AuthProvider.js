import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({childern}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;