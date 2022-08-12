import React, {  createContext,  useState } from 'react';


export const userAuthContext = createContext();
export const userGlobalInfoContext = createContext();

 export default function UserInfoAuthContextProvider({children}) {


   const [userAuthState, setUserAuthState] = useState(false);
    const [userGlobalInfoState, setUserGlobalInfoState]  = useState({});


        return(
            <userAuthContext.Provider value={[userAuthState, setUserAuthState]}>
                <userGlobalInfoContext.Provider value={[userGlobalInfoState, setUserGlobalInfoState]}>
                     {children}
                </userGlobalInfoContext.Provider>
            </userAuthContext.Provider>
        )
    
}



















