import { useState } from 'react'
import './App.css'
import MyNavbar from './components/Navbar/Navbar' 
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
      <MyNavbar />
      <main>
        <h1>Sua Festa Mágica Começa aqui!</h1>
      </main>
    </div>
    <div>
      <Footer />    
    </div>
    </>
    
  )
}

export default App