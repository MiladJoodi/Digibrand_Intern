"use client"

import { createContext, useState, useContext } from "react";

const AppContext = createContext({
    hello: 'world'
});

export function AppWrapper({ children }) {
    let [productCount, setProductCount] = useState(0)

    return (
        <AppContext.Provider value={{
            productCount,
            setProductCount
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Hook
export function useAppContext() {
    return useContext(AppContext);
}

