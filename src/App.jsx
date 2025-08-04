import { Container, Form, Nav, Navbar, Card, Row, Col } from 'react-bootstrap'
import './App.css'
import PostList from './components/PostList'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import SearchBar from './components/SearchBar'
import TitleSync from './components/TitleSync'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')  

  return (
    <>
    <ThemeProvider>
      <Navbar bg='primary' variant='dark' className='mb-4'>
        <Container>
         <Navbar.Brand>hooks en react</Navbar.Brand>
         <Nav className="ms-auto">
          <ThemeToggle />
         </Nav>
        </Container>
      </Navbar>
      <Container>
        <Card className='p-3 mb-3'>
          <TitleSync />
        </Card>
        <Card className='p-3 mb-3'>
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          <PostList searchTerm={search} />
        </Card>
      </Container>
    </ThemeProvider>
</>
  )
}

export default App