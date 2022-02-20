import { useState, createContext, useContext } from 'react'
export const HeaderContext = createContext<any>('')

const HeaderContextProvider = ({ children }) => {
    const [view, setView] = useState(false)
    const value = { view, setView }
    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}

export default HeaderContextProvider

export const useHeaderContext = () => useContext(HeaderContext)