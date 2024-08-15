// "use client"
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useContext, useEffect } from 'react';
// import { AuthorizationProviderContext } from '../../../context/AuthorizationProvider';

// export default function ProtectedLayout({ children }) {

//   const router = useRouter()
//   const path = usePathname()
//   const { isAuthenticate } = useContext(AuthorizationProviderContext)

//   useEffect(() => {
//     if (isAuthenticate() && ['/login-register'].includes(path)) {
//       router.replace('/')
//     }
//     if (!isAuthenticate() && ['/login-register'].includes(path) === false) {
//       router.replace('/login-register')
//     }
//   }, [])

//   return (
//     <>
//       {children}
//     </>
//   );
// }

// // export default dynamic(() => Promise.resolve(ProtectedLayout), { ssr: false })

"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AuthorizationProviderContext } from "../../../context/AuthorizationProvider";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const path = usePathname();
  const { isAuthenticate } = useContext(AuthorizationProviderContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      const authenticated = isAuthenticate();

      if (authenticated && ["/login-register"].includes(path)) {
        router.replace("/");
      } else if (
        !authenticated &&
        ["/login-register"].includes(path) === false
      ) {
        router.replace("/login-register");
      } else {
        setLoading(false);
      }
    };

    authenticate();
  }, [path]);

  if (loading) {
    return null; // or a loading spinner, or a placeholder component
  }

  return <>{children}</>;
}
