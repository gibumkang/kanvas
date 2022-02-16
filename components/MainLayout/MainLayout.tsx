import OffCanvasMenu from './OffCanvasMenu/OffCanvasMenu'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const MainLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <OffCanvasMenu />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout
