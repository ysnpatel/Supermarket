import React, { createContext, useState} from 'react';

export const CustomContext = createContext();

const Context = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false); //context for checking if user is authenticated
    const [currentUserInfo, setCurrentUserInfo] = useState({message:'test1'}); //context for current signed in users name
    const [cart, setCart] = useState({}) //context for cart
    const [isDrawerOpen, setIsDrawerOpen] = useState(false) //context for drawer
    const [filter, setFilter] = useState([]) //context for filter


    return <CustomContext.Provider value ={{authenticated, setAuthenticated, currentUserInfo, setCurrentUserInfo, cart, setCart, isDrawerOpen, setIsDrawerOpen, filter, setFilter}}> {children}</CustomContext.Provider>
    
}

export default Context;