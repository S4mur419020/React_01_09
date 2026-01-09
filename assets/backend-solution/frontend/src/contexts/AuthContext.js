import React, { Children, useState } from 'react'

export const AuthContext=createContext();

export function AuthProvider({children}) {
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null);
    const [serverError,setServerError]=useState(null);

    function login(adat){

    }
    function register(adat){

    }
    function loadUser(){

    }
    function logout(){

    }
    function hibakezeles(error){

    }
  return (
    <AuthContext.Provider value={{login, register, loading, user, logout, serverError, loadUser}}>
        {Children}
    </AuthContext.Provider>
  )
}
