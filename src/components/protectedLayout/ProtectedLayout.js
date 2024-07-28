import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { AuthorizationProviderContext } from '../../../context/AuthorizationProvider';

export default function ProtectedLayout({children}) {
    const router = useRouter()
    const path = usePathname()
    const {authorization, isAuthenticate} = useContext(AuthorizationProviderContext)


    useEffect(()=>{
        if(isAuthenticate() && ['/login-register'].includes(path)){

            router.replace('/')
        }
    },[])

  return (
    <>
      
    </>
  );
}
