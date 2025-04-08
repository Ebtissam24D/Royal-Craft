import Layout from "./components/Layout"
import "./index.css"
// import HomePage from "./pages/Homepage"
// import Products from "./pages/ProduitPage/Products.jsx"
// import Recommended from "./pages/ProduitPage/Recommended.jsx"
// import Category from "./pages/ProduitPage/Category.jsx"
// import Colors from "./pages/ProduitPage/Colors.jsx"
// import Price from "./pages/ProduitPage/Price.jsx"
// // import Sidebar from "./pages/ProduitPage/Sidebar.jsx"
// import "./app.css"; // Ajoute ce fichier pour le layout
// import Catalogue from "./pages/ProduitPage/Catalogue.jsx"
import PlusdedetailleP from "./pages/PlusDedetailleProduit/Plusdedetaille"



function App() {
  return (
    <Layout>
      {/* // <LayoutArtisan> */}
      {/* <HomePage /> */}

      <PlusdedetailleP />
      {/* <Catalogue />

    // <Recommended />
    // <Category />
    // <Colors />
    // <Price /> */}

      {/* </LayoutArtisan> */}
    </Layout>
  )
}

export default App

