import Footer from './Footer/Footer'
import Header from './Header/Header'

const MainLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout
