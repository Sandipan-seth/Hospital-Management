import { createContext, useState } from "react";
import { doctors } from '../assets/assets_frontend/assets'


const AppContext = createContext();

export const AppContextProvider =(props)=>{
    const [token, setToken] = useState(true);
    const [toggle, setToggle] = useState(false);
    const currencySymbol = "₹";
    
    const value ={
        doctors,
        token,
        setToken,
        toggle,
        setToggle,
        currencySymbol
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext;