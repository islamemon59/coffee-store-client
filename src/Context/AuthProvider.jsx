import React from 'react';
import { AuthContext } from './Context';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function AuthProvider({children}) {

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser,
    }

  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  );
}

export default AuthProvider;