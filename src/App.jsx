
import { Home } from './Pages/Home'
import '../src/styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Home />
    </BrowserRouter>
  )
}

export default App
