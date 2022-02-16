import Header from "./Header/Header"

const MainLayout = ({children} : any) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default MainLayout;