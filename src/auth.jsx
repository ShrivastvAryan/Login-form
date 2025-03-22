// for context api

import { createContext,useContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const[user,setUser]=useState()

    const storeTokenInLS=(serverToken)=>{
        return localStorage.setItem('token', serverToken);
    }; // now it has become reusable function because of context api

    let isLoggedIn=!!token; // if token is there then its true , if not then its false(for navabar part)

    //tackling the logout 

    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token")
    };

    // Jwt Authentication- to get the currently loggen in user data

    const userAuthentication=async()=>{
        try {
            const response= await fetch("http://localhost:5000/api/auth/user",{
                method:'GET',
                headers:{
                    Authorization:`Bearer${token}`
                }
            });

            if(response.ok){
                const data=await response.json();
                setUser(data.userData);
            }
            
        } catch (error) {
            console.error("error fetching user data")
        }
    }

    useEffect(()=>{
        userAuthentication()
    },[])

    return(
    <AuthContext.Provider value={{storeTokenInLS}}>
        {children}
    </AuthContext.Provider>
    )
};

export const useAuth=()=>{
    const AuthContextValue= useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("use Auth used outside of Provider");
    }

    return AuthContextValue;
}; // Now all the data is init

//Always remember to wrap in main file