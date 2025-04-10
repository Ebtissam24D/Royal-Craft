import Layout from "./components/Layout"
import "./index.css"
// import HomePage from "./pages/Homepage"
// import Signupform from "./pages/Signupform"
import LoginForm from "./pages/LogForm"
// import AvisReclamationsApp from "./pages/avies"
// import Cart from "./pages/Cart"
// import ArtisanNotificationPage from "./pages/ArtisanNotificationPage"
// import AdminNotificationPage from "./pages/AdminNotificationPage"
// import PlusdedetailleP from "./pages/PlusDedetailleProduit/Plusdedetaille"
// import AProposDeNous from "./pages/AProposDeNous/AProposDeNous"

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* <Signupform /> */}
      {/* <AvisReclamationsApp/> */}
      {/* <PlusdedetailleP />  */}
      {/* <AProposDeNous /> */}

      <LoginForm />
      {/* <Cart /> */}
      {/* <ArtisanNotificationPage /> */}
      {/* <AdminNotificationPage /> */}


    </Layout>
  )
}

export default App

