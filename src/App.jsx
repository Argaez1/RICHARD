import { Container } from 'react-bootstrap'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Barra from './components/Barra'
import Home from './components/Home'
import Usuario from './components/Usuario'
import Productos from './components/Productos'

function App() {
  return (
    <>
    <ThemeProvider>
      <Router>
        <Barra />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
</>
  )
}

export default App