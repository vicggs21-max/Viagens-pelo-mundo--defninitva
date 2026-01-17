import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import './styles/global.css';
import { Destination } from './Pages/Destination/Destination';
import { Contact } from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
  
         <Route path="/destinos" element={<Destination />} />
        <Route path="/contato" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;