import { useState, createContext } from 'react'
export const MainContext = createContext<any>('')

enum viewState {
    standard,
    details,
}

export enum EPages {
    HOME = 'HOME',
    SERVICES = 'SERVICES',
    GALLERY = 'GALLERY',
    CLIENTS = 'CLIENTS',
    STORY = 'STORY',
    CONTACT = 'CONTACT',
}

type TPage =
    | EPages.HOME
    | EPages.SERVICES
    | EPages.GALLERY
    | EPages.CLIENTS
    | EPages.STORY
    | EPages.CONTACT

interface INavigation {
    currentPage: TPage
}

interface IContext {
    Navigation: INavigation
}

const initialState: IContext = {
    Navigation: {
        currentPage: EPages.HOME,
    },
}

const MainContextProvider = ({ children }) => {
    const [view, setView] = useState(initialState)
    const changePage = (targetPage: TPage) => {
        setView({
            ...view,
            Navigation: {
                currentPage: targetPage,
            },
        })
    }
    const value = {
        view,
        setView,
        changePage,
    }
    return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContextProvider
