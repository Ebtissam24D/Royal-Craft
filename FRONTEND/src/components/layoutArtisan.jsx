import FooterArtisan from "./FooterArtisan.jsx"
import HeaderArtisan from "./HeaderArtisan.jsx";


function LayoutArtisan({ children }) {
    return (
        <div className="layoutArtisan">
            <HeaderArtisan />
            <main className="main-content">
                {children}
            </main>
            <FooterArtisan />

        </div>
    )
}

export default LayoutArtisan;

