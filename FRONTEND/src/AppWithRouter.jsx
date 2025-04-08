import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import "./index.css"
import HomePage from "./pages/Homepage"

function AppWithRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppWithRouter

