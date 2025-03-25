import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./database/authcontext";
import ProtectedRoute from "./Components/ProtectedRoute"; 
import Login from "./Views/Login";
import Encabezado from "./components/Encabezado";
import Inicio from "./Views/Inicio";
import Categorias from "./views/Categorias";


import './App.css'


function App() {
  return (
    <AuthProvider>
      <Router>
          <Encabezado />
          <main className="margen-superior-main">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
              <Route path="/Categorias" element={<ProtectedRoute element={<Categorias />} />} />

            </Routes>
          </main>
      </Router>
    </AuthProvider>
  )
}

export default App;