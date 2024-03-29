'use client'


import { useState } from "react";
import React from 'react'
import { createContext, useContext } from "react";
const UserContext = createContext<any>(undefined);

export function UserWrapper({children}:{children:React.ReactNode}){
    const [user, setUser] = useState("Home");
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    return useContext(UserContext)
}

