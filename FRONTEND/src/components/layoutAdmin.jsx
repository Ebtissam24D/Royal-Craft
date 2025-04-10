import FooterAdmin from "./FooterAdmin.jsx"
import HeaderAdmin from "./HeaderAdmin.jsx";


function LayoutAdmin({ children }) {
    return (
        <div className="layoutArtisan">
            <HeaderAdmin />
            <main className="main-content">
                {children}
            </main>
            <FooterAdmin />

        </div>
    )
}

export default LayoutAdmin;

