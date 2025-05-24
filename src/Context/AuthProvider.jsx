import React, { useState } from 'react';
import { AuthContext } from './Context';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth';

function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const deleteCurrentUser = (user) => {
        return deleteUser(user)
    }

    const userInfo = {
        createUser,
        signInUser,
        currentUser,
        setCurrentUser,
        deleteCurrentUser,
    }

  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  );
}

export default AuthProvider;