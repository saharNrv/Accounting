"use client"

import { createContext, useEffect, useState } from "react";
import useStorage from "../hooks/useStoreg";
import { AUTH_TOKEN_KEY } from "../common/const";
import moment from "moment";

export const initialAuthorization = {
    token: "",
    refresh: "",
    expire: ""
}

// interface AuthorizationDTO {
//     token: string;
//     refresh: string;
//     expire: Date | string;
// }

// interface AuthorizationContextProps {
//     authorization: AuthorizationDTO;
//     setAuthorization: Function;
//     isAuthenticate: () => boolean;
// }

export const AuthorizationProviderContext = createContext({
    authorization: initialAuthorization,
    setAuthorization: () => null,
    isAuthenticate: () => false
})

export const AuthorizationProvider = ({ children }) => {

    const [authorization, setAuthorization] = useStorage(AUTH_TOKEN_KEY, initialAuthorization)

    const isAuthenticate = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            // Get the authorization data from local storage
            let json = window.localStorage.getItem(AUTH_TOKEN_KEY)
            const auth = json ? JSON.parse(json) : null
            if (auth) {
                // Check if the authorization token is empty or expired
                const expired = moment(auth.expire).isBefore(moment())

                if (auth.token !== "" || !expired) {
                    return true
                }
            }
        }
        return false
    }

  

    return (
        <AuthorizationProviderContext.Provider value={{ authorization, setAuthorization, isAuthenticate }}>
            {children}
        </AuthorizationProviderContext.Provider>
    )

}