import Layout from "./components/Layout"
import "./index.css"
// import InscripForm from "./pages/log"
import HomePage from "./pages/Homepage"
// import SignupForm from "./pages/SignupForm"
import Logform from "./pages/Logform"
import Cart from "./pages/Cart"

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* Ajoutez d'autres pages ici si nécessaire */}
      {/* <SignupForm/> */}
      {/* <Logform/> */}
      <Cart/>
      
    </Layout>
  )
}

export default App

